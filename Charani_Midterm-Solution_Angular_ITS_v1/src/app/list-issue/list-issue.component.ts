import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/issue.model';
import { IssueService } from '../service/issue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-issue',
  // standalone: true,
  // imports: [],
  templateUrl: './list-issue.component.html',
  styleUrls: ['./list-issue.component.css']
})
export class ListIssueComponent implements OnInit{
  searchTerm: string = '';
  issues: Issue[] = [];
  filterIssues: Issue[] = [];
  issueService: IssueService;

  constructor(issueService: IssueService, private router: Router) {
    this.issueService = issueService;
  }

  ngOnInit(): void {
    this.loadIssue();
    this.issueService.getIssues().subscribe((issueData) => {
      this.issues = issueData
    });
  }

  loadIssue() : void {
    this.issueService.getIssues().subscribe((issueData) => {
      this.issues = issueData;
      this.filterIssues = [...this.issues];
    });
  }

  deleteIssue(toDeleteIssue: Issue): void {
    if(toDeleteIssue.id !== undefined) {
      this.issueService.deleteIssue(toDeleteIssue.id).subscribe((issue) => {
        this.issues = this.issues.filter(issue => issue.id !== toDeleteIssue.id);
        this.filterIssues = this.filterIssues.filter(issue => issue.id!== toDeleteIssue.id)
      });
    }
  }

  updateIssue(issueId: number) : void {
    if(issueId !== undefined) {
      this.router.navigate(['update', issueId]);
    }
    else {
      console.log("Issue Id is undefined");
    }
  }

  filterIssue(): void {
    if(this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      this.filterIssues = this.issues.filter(issue =>
      (this.issues  =this.issues.filter(issue =>
      (issue.id && issue.id.toString().includes(term)) ||
    (issue.assignee && issue.assignee.toLowerCase().includes(term)) ||
  (issue.title && issue.title.toLowerCase().includes(term)) ||
  (issue.priority && issue.priority.toLowerCase().includes(term)) ||
  (issue.status && issue.status.toLowerCase().includes(term))
  )));
    }
    else {
      this.filterIssues = [...this.issues];
    }
  }
}
