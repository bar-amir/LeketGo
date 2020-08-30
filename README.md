# LeketGo

An all-hebrew NextJS app for managing food collecting tasks in the real world.<br>
In the making for [Leket Israel (The National Food Bank)](https://www.leket.org/en/), a non-profit organization that rescues surplus food for those in need.

## Overview

Developed by Bar Amir, Matan Wilchek, Alon Kagan and Roey Ravits as our semestrial project in the [Google Technologies for Cloud and Web Development Workshop](https://sites.google.com/site/cloudweb18b/) at Tel Aviv University.

## Installation

The Web app is running on Chrome, Safari, Firefox. <br>
In order to edit code, you will need to install NodeJS.

## Usage Instructions

### Login page

In case of forgetting your password, you can reset it using 'forgot password'.<br>
A link to reset your password will be sent to your mail.

### Control panel page - Administrator

You can view informative data about this week volunteers and tasks.

### Volunteers page - Administrator

You can view the list of active and inactive users (volunteers).<br>
You can add a new user menually or 'from file'.<br>
If you choose 'from file', you will need to follow the example file ("/users.xlsx"), and fill the same columns and fields.<br>
For every active user you can take different actions under 'options'. You can edit his personal info, change his password, change his permissions to administrator, or disable his account.<br>
For every inactive user you can bring him back to be active.<br>
You can use the search field to filter the list, under chosen column. <br>
You can export the list of users as an excel file using 'export users report'.

### Tasks Page - Administrator

You can view the list of tasks for this week, past tasks, or future tasks.<br>
You can add a new task menually or 'from file'.<br>
If you choose 'from file', you will need to follow the example file ("/tasks.xlsx"), and fill the same columns and fields.<br>
For every task you can take different actions under 'options'. You can edit its info or delete it.<br>
For every task there is an icon (on the right side of the row), which indicates its status: 'assigned', 'assigned but hasn't been done yet', 'done but its report hasn't been filled yet', 'done and report filled'. <br>
You can filter tasks by their status, on the bottom left buttons. <br>
You can export the list of tasks as an excel file using 'export tasks report'. In that file you can view also the reports filled by users (at the same row of the relevant task).

### Personal information page - Administrator and User

You can view your personal information and edit it. <br>
Before saving changes you will need to make sure that the fields of 'new password' and 're-enter password' are the same (or both none), in order to apply changes. PAY ATTENTION that chrome will sometimes choose to automatically add your password. <br>

### Availabe tasks page - User 

You can view this week upcoming tasks, choose those you want, and make a registration request.<br>
You will see immediately if your request has been granted.

### My upcoming tasks page - User

You can view the tasks which has been assigned for you, with contacts and other info. <br> 
On the upper left corner you can choose to view as list or as boxes.
For each task you can see notes regarding it, remove it back to availabe tasks, or report it has 'done' or has 'undone'.<br>
If you choose 'done' you will be redirecting to fill a report. <br> 
PAY ATTENTION that the task will be marked as 'done' and move to your history page, only after you will fill the report. <br>
If you choose 'undone' you will need to specify the reason why. <br>

### Pending reports page - User

Here you will see pending tasks which their date has already passed, and you didn't fill their reports or marked them as 'undone'. <br>
PAY ATTENTION you need this list to be empty as soon as possible!

### History page - User

Here you can view your tasks history

## Architectural overview

* [Next.js](https://github.com/zeit/next.js) – The React Framework
* [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) – The most popular front-end framework, rebuilt for React
* [Firebase](https://firebase.google.com/) – Application development platform by Google

## Deploying to Firebase

```bash
npm run build
npm run export
firebase login
firebase use leketgo
```

remove the content from /public, except '404.html'<br>
copy the content from /out to /public

test localy: 
```bash
firebase serve
```
deploying to firebase:<br>
only hosting - 
```bash
firebase deploy --only hosting
```
everything (include functions) - 
```bash
firebase deploy 
```
*It's possible that chrome will show the old site. If so you'll first need to clean the web_cache and cookies