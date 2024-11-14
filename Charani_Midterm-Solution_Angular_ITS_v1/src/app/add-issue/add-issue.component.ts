import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Issue } from '../model/issue.model';
import { IssueService } from '../service/issue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  // standalone: true,
  // imports: [],
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
  addForm!: FormGroup;
  id: number = 0;
  issue: Issue = new Issue();
  constructor(private issueService: IssueService,
    private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.issueService.getIssueById(this.id).subscribe(searchedIssue => { this.issue = searchedIssue; }, error => console.log(error));
    }

    createIssue(): void {
      this.issueService.createIssue(this.issue).subscribe(createIssue => { console.log(this.createIssue)}, error => console.log(error));
      this.router.navigate(['/issues']);
    }
}
