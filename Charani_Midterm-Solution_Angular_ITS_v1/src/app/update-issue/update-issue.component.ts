import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/issue.model';
import { IssueService } from '../service/issue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-issue',
  // standalone: true,
  // imports: [],
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css']
})
export class UpdateIssueComponent implements OnInit {
  id: number = 0;
  issue: Issue = new Issue();
  constructor(private issueService: IssueService,
    private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.issue = new Issue();
      this.issueService.getIssueById(this.id).subscribe(searchedIssue => { this.issue = searchedIssue; }, error => console.log( error));
    }

    updateIssue(): void {
      this.issueService.updateIssue(this.id, this.issue).subscribe(updatedIssue => { console.log(updatedIssue) }, error => console.log(error));
      this.router.navigate(['/issues']);
    }
}
