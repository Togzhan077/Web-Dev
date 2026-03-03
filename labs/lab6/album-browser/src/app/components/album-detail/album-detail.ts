import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.loading = false;
    });
  }

  saveAlbum() {
    if (!this.album) return;
    this.albumService.updateAlbum(this.album).subscribe(() => {
      this.saved = true;
      setTimeout(() => this.saved = false, 2000);
    });
  }

  goToPhotos() {
    this.router.navigate(['/albums', this.album?.id, 'photos']);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}