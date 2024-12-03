Angular Project Setup:
=====================

1) Install 


Directives: useful to alter the DOM
===========

1)Structural Directives:
   *ngFor, *ngIf

2)Attribute directives:
   
   ngStyle, ngClass

Pipes: Useful to alter the data format.

     |Uppercase
     |lowercase
     |date
     |date:'yyyy-MM-dd'


<!-- DATA FLOW -->
==================


<!-- API Integration -->
========================
0) create vehicle component and service

1) Import HttpClientModule

2) Inject HttpClient service in vehicle service
   
   write a get method to hit API

3) API call is an observable so
   
   subscribe it 
   

API POSSIBLE API CALLS

1) all          get         get(URL)

2) specific     get         get(URL/id)

3) filtering    get         get(URL?filter=red)

4) pagination   get         get(URL?limit=10&page=1)

5) sorting      get         get(URL?limit=10&page=1)

6) create       post        post(URL,data)

7) update       put         put(URL/id, data)

8) delete       delete      put(URL/id)




GIT:
=====

1) Link laptop with github website

   git config --global user.name  "XXXXX"
   git config --global user.email  "XXXXX"

   Check: git config --list


2) Link project with repository

    git init
    git remote add origin URL
    CHECK :git remote -v

3) Sync code

   git add .                     changes->stagedchanges
   git commit -m "xxx"           staged changes ->
   git push

   ***) first time push suggestion command with -f

   create branch(git hub)

   git fecth
   git checkout xxxxx
   git branch

   git add .
   git commit -m "xxx"
   git push

   pull request
   (git hub)


Forms:
======

1) FormGroup
2) Nested FormGroup
3) Dynamic FormGroup
4) FormArray
5) Validations
6)  Custom Validations













































