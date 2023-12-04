export const formatIsoDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 7) {
    // For differences less than 7 days, use RelativeTimeFormat
    const rtf = new Intl.RelativeTimeFormat('en', {numeric: 'auto'});
    if (diffDays > 0) {
      return rtf.format(-diffDays, 'day');
    } else {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      if (diffHours > 0) {
        return rtf.format(-diffHours, 'hour');
      } else {
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        return rtf.format(-diffMinutes, 'minute');
      }
    }
  } else {
    // For differences of 7 days or more, use DateTimeFormat
    const dtf = new Intl.DateTimeFormat('en', {month: 'short', day: 'numeric'});
    return dtf.format(date);
  }
};

export const formatDate = (date: Date): string | undefined => {
  if (!date) {
    return undefined;
  }
  const dtf = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const [{value: month}, , {value: day}, , {value: year}] =
    dtf.formatToParts(date);

  return `${year}-${month}-${day}`;
};
