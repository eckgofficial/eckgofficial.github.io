var links = [
    'https://www.linkedin.com/pulse/global-e-waste-recycling-market-growth-analysis-future-ashneer-singh-q4s1f?trk=article-ssr-frontend-pulse_more-articles_related-content-card',
    'https://recyclinginside.com/events/e-waste-world-conference-expo-2024/',
    'https://www.pna.gov.ph/articles/1188610',    
    // Add more links as needed
  ];

  // Function to redirect to a random link
  function goToRandomLink(event) {
    event.preventDefault(); // Prevent the default link behavior
    var randomIndex = Math.floor(Math.random() * links.length);
    var randomLink = links[randomIndex];
    window.location.href = randomLink;
  }

  // Add click event listener to the link
  document.getElementById('randomButton').addEventListener('click', goToRandomLink);

  document.getElementById('randomButton2').addEventListener('click', goToRandomLink);
