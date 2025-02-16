import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  
  questions: string[] = [
    'Tell us about yourself',
    'What are your greatest strengths?',
    'Where do you see yourself in 5 years?',
    'Why should we hire you?',
    'What is your biggest achievement?'
  ];
  
  currentQuestionIndex: number = 0;
  selectedQuestions: string[] = [];
  timeRemaining: number = 15;
  timerInterval: any;
  cameraCheckInterval: any;
  isPreparationTime: boolean = true;
  mediaStream: MediaStream | null = null;
  isCameraActive: boolean = true;
  speechSynthesis: SpeechSynthesis;

  constructor(private router: Router) {
    this.speechSynthesis = window.speechSynthesis;
  }

  async ngOnInit() {
    this.selectRandomQuestions();
    await this.setupCamera();
    this.startPrepTimer();
    this.readQuestion();
    this.startCameraMonitoring();
  }

  startCameraMonitoring() {
    this.cameraCheckInterval = setInterval(() => {
      this.checkCameraActive();
    }, 1000);
  }

  async checkCameraActive() {
    const videoTrack = this.mediaStream?.getVideoTracks()[0];
    
    if (!videoTrack || !videoTrack.enabled || videoTrack.readyState !== 'live') {
      this.handleCameraDisruption();
    }

    const video = this.videoElement.nativeElement;
    if (video.videoWidth === 0 || video.videoHeight === 0) {
      this.handleCameraDisruption();
    }
  }

  handleCameraDisruption() {
    this.isCameraActive = false;
    clearInterval(this.cameraCheckInterval);
    clearInterval(this.timerInterval);
    
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
    }

    alert('Camera access was lost. The interview has been terminated.');
    this.router.navigate(['/interview-setup']);
  }

  async setupCamera() {
    try {
      // First get video stream only
      const videoStream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: false
      });

      // Then get audio stream separately
      const audioStream = await navigator.mediaDevices.getUserMedia({ 
        video: false,
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });

      // Set only video stream to video element
      const videoElement = this.videoElement.nativeElement;
      videoElement.srcObject = videoStream;
      videoElement.muted = true;
      videoElement.volume = 0;

      // Combine streams for complete mediaStream
      this.mediaStream = new MediaStream([
        ...videoStream.getVideoTracks(),
        ...audioStream.getAudioTracks()
      ]);

      // Add event listener for track ended
      this.mediaStream.getVideoTracks()[0].onended = () => {
        this.handleCameraDisruption();
      };

    } catch (err) {
      console.error('Failed to setup camera:', err);
      this.router.navigate(['/interview-setup']);
    }
  }

  selectRandomQuestions() {
    this.selectedQuestions = this.questions
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }

  readQuestion() {
    this.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(this.selectedQuestions[this.currentQuestionIndex]);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.lang = 'en-US';
    this.speechSynthesis.speak(utterance);
  }

  startPrepTimer() {
    this.timeRemaining = 15;
    this.isPreparationTime = true;
    
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.startAnswerTimer();
      }
    }, 1000);
  }

  startAnswerTimer() {
    this.timeRemaining = 60;
    this.isPreparationTime = false;
    
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        this.nextQuestion();
      }
    }, 1000);
  }

  nextQuestion() {
    clearInterval(this.timerInterval);
    if (this.currentQuestionIndex < 4) {
      this.currentQuestionIndex++;
      this.startPrepTimer();
      this.readQuestion();
    } else {
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop());
      }
      this.router.navigate(['/interview-complete']);
    }
  }

  skipPreparation() {
    clearInterval(this.timerInterval);
    this.startAnswerTimer();
  }

  replayQuestion() {
    this.readQuestion();
  }

  getProgressPercentage(): number {
    const totalTime = this.isPreparationTime ? 15 : 60;
    return (this.timeRemaining / totalTime) * 100;
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
    clearInterval(this.cameraCheckInterval);
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
    }
    this.speechSynthesis.cancel();
  }
}
