import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { IArticle } from '../article.interface';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { InitializationService } from 'src/app/initialization.service';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-create-edit-article',
  templateUrl: './create-edit-article.component.html',
  styleUrls: ['./create-edit-article.component.scss']
})
export class CreateEditArticleComponent {
  @ViewChild('editor') editor: any;
  loggedInUser: any;
  article: IArticle = {
    author: {
      img: '',
      name: '',
      position: ''
    },
    title: '',
    description: '',
    tags: [],
    thumbnail: ''
  };

  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ align: 'center' }, { align: 'right' }, { align: 'justify' }],
        ['image'],
      ],
    },
  };

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private _location: Location,
    private articlesService: ArticlesService,
    private initializationService: InitializationService) {
    this.article.tags = ['Lorem'];
    this.initializationService.loggedInUser$.subscribe((response) => {
      console.log(response);
      this.loggedInUser = response;
    });

  }

  logChange($event: any) {
    console.log(this.editor);
    console.log($event);
  }

  save() {
    const articleObj: IArticle = {
      ...this.article,
      author: {
        img: this.loggedInUser?.profilePic,
        name: this.loggedInUser?.firstName + this.loggedInUser?.lastName,
        position: this.loggedInUser?.email
      }
    };
    this.articlesService.addArticle(articleObj).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);

      })
    console.log(this.article, articleObj);
  }

  cancel() {
    this.article = null;
    this._location.back();
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our tag
    if (value) {
      this.article.tags.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    const index = this.article.tags.indexOf(tag);
    if (index >= 0) {
      this.article.tags.splice(index, 1);
    }
  }
}
