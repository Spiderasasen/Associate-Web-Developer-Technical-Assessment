# Prompt Log

# input 1
Generate backend folder structure (included was the tech assessment PDF)
- Why I asked this
  - I asked this question since I needed to know the basic idea on what I was supposed to do with the api handel i have
- What I kept
  - I kept the same tree structure that it recommended, with the inclusion of some file names that it gave me.

# input 2
ok, now with simple things that I'm supposed to do, please tell me what I'm supposed to add for 1 of the api/stocks/ files. and a good way to test that file to see if it's working
- Why I asked this
  - I wanted to get some sample code that the AI will be able to generate for me and see what was working and what was not
- What I kept
  - The code that it generated was only for service.ts. meaning that I had to write the functions that it wanted me to call.
  - The test when run was not successful, so I had to rewrite the code that it gave me in service.ts
  - The only problem that was wrong was a section of code that was calling the quote[i].low and not quote.low[i]
  - other than that, all code that was written on Copilot that is in service.ts is kept and unchanged, while the code that is being imported, I.E., date.ts, httpClient.ts and types.ts, has created by me.

# input 3
ok, so what commands can help run the api?
- Why I asked this
  - I had to move my original backend code to its own directory. when I finished with the contoller part of the project, which is used to call the API and put into json code, i forgot what commands i needed.
- What I kept
  - I ran using "npm run dev" like normal. I was suspecting I was going to use this, but I wanted to be sure that I was doing it correctly.

# input 4
ok so I wonder why my api is not showing from either my app.ts code or my server.ts code. what code do you need to see?
- Why I asked this
  - I asked this because I had no idea why my sever for the backend is not being shown in my web browser, so i can see the json from the api call. so asking the ai could see if there was something wrong with my code
- What I kept
  - I changed the typo error that it highlighted to me. which was very helpful since I was already very confused on why and i didn't see the typo that I wrote.

