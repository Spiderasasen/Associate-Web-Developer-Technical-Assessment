# Associate-Web-Developer-Technical-Assessment

** instructions **

Build a full-stack application that consumes a public stock API and displays intraday market
data.

# Backend
- Use a public stock API (Example in the PDF uses TSLA)
- Using TypScript/Node.js
- Endpoint
  - Takes stock symboil as a parameter
  - Queres indraday data from last month
  - Groups results by day
  - Resturns JSON in the format provided

[
    {
        "day": "2009-01-30",
        "lowAverage": 40.2958,
        "highAverage": 49.7534,
        "volume": 49073348
    }
]

# Frontend
- build a Ui, using React that uses the API
- Allow the user to enter a stock symbol and view the results
- Display the data in a meanigful way
  - Table or chart
- Basic error handling

# PROMPT_LOG.md 
- A log of the AI prompts you used during this exercise. For each entry
- include:
  - The prompt you sent
  - A brief note on why you chose that prompt (what were you trying to learn or achieve?)
  - What you kept, changed, or rejected from the AI output and why