import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss',
})
export class ExerciseComponent implements OnInit {
  text: string = '';
  formData: any = {
    qusteion1: '',
    level: 'easy',
    answers: [
      { ans: '', test: 'one' },
      { ans: '', test: 'two' },
    ],
  };

  addAnswer() {
    this.formData.answers.push({ ans: '', test: '' });
  }

  removeAnswer(index: number) {
    this.formData.answers.splice(index, 1);
  }

  saveDraft() {
    // Add your logic to save the draft
    console.log(this.formData);
  }

  clearForm(form: any) {
    form.resetForm();
    this.formData = {
      qusteion1: '',
      level: 'easy',
      answers: [
        { ans: '', test: 'one' },
        { ans: '', test: 'two' },
      ],
    };
  }

  formData2: any = {
    test: '',
    level: 'easy',
    options: [
      { qusteion: '', ans: 'one' },
      { qusteion: '', ans: '' },
    ],
  };

  addOption() {
    this.formData2.options.push({ qusteion: '', ans: '' });
  }

  removeOption(index: number) {
    this.formData2.options.splice(index, 1);
  }

  saveDraft2() {
    // Add your logic to save the draft
    console.log(this.formData2);
  }

  clearForm2(form: any) {
    form.resetForm();
    this.formData2 = {
      test: '',
      level: 'easy',
      options: [
        { qusteion: '', ans: 'one' },
        { qusteion: '', ans: '' },
      ],
    };
  }
  ngOnInit(): void {}

  dragItems = [
    { label: 'اختيار من متعدد', data: 'اختيار من متعدد' },
    { label: 'اختيار من فردي', data: 'اختيار من فردي' },
    { label: 'نص', data: 'نص' },
  ];

  onDrop(event: CdkDragDrop<string[]>): void {
    // Access the value of the dragged item directly
    this.text = event.item.data;
    console.log('Dragged txet:', this.text);
  }
}
