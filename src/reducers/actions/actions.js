export const filterGenres = events => {
  const genres = [];
  events.filter(event => {
    if (!genres.includes(event.genre)) {
      return genres.push(event.genre)
    }
  });
  return genres
}

export const sortByDate = events => {
  events.sort((a, b) => {
    if (a.startsAt < b.startsAt) { return -1; }
    if (a.startsAt > b.startsAt) { return 1; }
    return 0;
  })
  return events
}

export const reverseDates = events => {
  const reformatDates = events.map(event => {
    const separated = event.startsAt.split('T')
    const date = separated[0].split('-').reverse().join('-')
    return { ...event, date }
})
return reformatDates
}