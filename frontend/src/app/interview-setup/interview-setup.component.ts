import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-setup',
  templateUrl: './interview-setup.component.html',
  styleUrls: ['./interview-setup.component.scss']
})
export class InterviewSetupComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  
  deviceChecks = {
    camera: false,
    microphone: false,
    network: false
  };
  checkingDevices = true;
  mediaStream: MediaStream | null = null;

  constructor(private router: Router) {}

  async ngOnInit() {
    await this.checkDevices();
    this.checkNetworkConnection();
    this.checkingDevices = false;
  }

  async checkDevices() {
    // Check camera and start preview
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: true 
      });
      this.deviceChecks.camera = true;
      
      // Set video stream to preview
      if (this.videoElement && this.videoElement.nativeElement) {
        this.videoElement.nativeElement.srcObject = this.mediaStream;
      }
      
      // Check microphone (already granted with getUserMedia)
      this.deviceChecks.microphone = true;
    } catch (err) {
      console.error('Device check failed:', err);
      this.deviceChecks.camera = false;
      this.deviceChecks.microphone = false;
    }
  }

  checkNetworkConnection() {
    // Set network to true if online
    this.deviceChecks.network = navigator.onLine;

    // Add event listeners for online/offline status
    window.addEventListener('online', () => {
      this.deviceChecks.network = true;
    });

    window.addEventListener('offline', () => {
      this.deviceChecks.network = false;
    });

    // Double check with a ping
    this.pingServer();
  }

  async pingServer() {
    try {
      const response = await fetch('https://www.google.com/favicon.ico', {
        mode: 'no-cors',
        cache: 'no-cache'
      });
      this.deviceChecks.network = true;
    } catch (error) {
      console.error('Network check failed:', error);
      this.deviceChecks.network = false;
    }
  }

  startInterview() {
    if (this.allChecksPass()) {
      // Stop the preview stream before navigating
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop());
      }
      this.router.navigate(['/interview']);
    }
  }

  allChecksPass(): boolean {
    return this.deviceChecks.camera && 
           this.deviceChecks.microphone && 
           this.deviceChecks.network;
  }

  ngOnDestroy() {
    // Clean up: stop all tracks when component is destroyed
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
    }
  }

  // Add a retry method for manual checks
  async retryChecks() {
    this.checkingDevices = true;
    await this.checkDevices();
    this.checkNetworkConnection();
    this.checkingDevices = false;
  }
}
