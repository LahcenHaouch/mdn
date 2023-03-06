function displaySeason() {
  const season = prompt('Enter a season');

  if (!season) {
    return 'Invalid input';
  }

  if (season.includes('summer')) {
    return 'It\'s Summer time!!!';
  } else if (season.includes('winter')) {
    return 'Winter is upon us';
  }
  return 'Whatever Man';
}

console.log(displaySeason());