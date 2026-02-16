function likes(n) {
  if (n < 1000) return String(n);
  if (n < 1_000_000) return `${Math.floor(n / 1000)}K`;
  return `${Math.floor(n / 1_000_000)}M`;
}

window.run = function () {
  console.log(likes(983));
  console.log(likes(1900)); 
  console.log(likes(54000)); 
  console.log(likes(120800));
  console.log(likes(25222444)); 
};
