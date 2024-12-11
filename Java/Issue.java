import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

enum Priority {
    LOW, MEDIUM, HIGH;
}

enum Status {
    OPEN, IN_PROGRESS, RESOLVED, CLOSED;
}

class Issuee {
    int IssueId;
    String Title;
    String Description;
    Priority priority;
    Status status;
    String Assignee;
    Date IssueDate;

    void takeIssue() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter IssueId : ");
        IssueId = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Enter the Title : ");
        Title = scanner.nextLine();

        System.out.print("Enter Description : ");
        Description = scanner.nextLine();

        while (true) {
            try {
                System.out.print("Enter your priority (LOW/MEDIUM/HIGH) : ");
                priority = Priority.valueOf(scanner.nextLine().toUpperCase());
                break;
            } catch (IllegalArgumentException e) {
                System.out.println("Invalid input. Please enter one of: LOW, MEDIUM, HIGH.");
            }
        }

        while (true) {
            try {
                System.out.print("Enter status (OPEN/IN_PROGRESS/RESOLVED/CLOSED) : ");
                status = Status.valueOf(scanner.nextLine().toUpperCase());
                break;
            } catch (IllegalArgumentException e) {
                System.out.println("Invalid input. Please enter one of: OPEN, IN_PROGRESS, RESOLVED, CLOSED");
            }
        }

        System.out.print("Enter Assigne :");
        Assignee = scanner.nextLine();

        IssueDate = new Date();
    }

    // void display(){
    // System.out.println("ID is :"+IssueId);
    // System.out.println("Title of issue is :"+Title);
    // System.out.println("Description of issue: "+Description);
    // System.out.println("Priority of level: "+Priority);
    // System.out.println("Status: "+Status);
    // System.out.println("Assigned to: "+Assignee);
    // System.out.println("Issued Date: "+IssueDate);

    // }

    @Override
    public String toString() {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/mm/yyyy");
        return "IssueId : " + IssueId +
                "\n Title : " + Title +
                "\n Description : " + Description +
                "\n Priority : " + priority +
                "\n Status : " + status +
                "\n Assigned to : " + Assignee +
                "\nDate :" + sdf.format(IssueDate);
    }
}

public class Issue {
    public static void main(String[] args) {
        // obj = null;
        // Issuee obj = new Issuee();
        // obj.takeIssue();
        // obj.display();
        // System.out.println(obj);
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of issues to be created : ");
        int numberOfIssues = scanner.nextInt();
        scanner.nextLine();
        
        Issuee[] issues = new Issuee[numberOfIssues];

        for(int i = 0; i< numberOfIssues; i++) {
            System.out.println("Enter the details : ");
            issues[i] = new Issuee();
            issues[i].takeIssue();
        System.out.println(issues[i]);

        }

        System.out.println("----------------------------");

    }
}
