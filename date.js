function getDate() {
  const date = new Date();
  switch (date.getMonth() + 1) {
    case 1:
      return `${date.getDate()} January ${date.getFullYear()}`;

    case 2:
      return `${date.getDate()} February ${date.getFullYear()}`;

    case 3:
      return `${date.getDate()} March ${date.getFullYear()}`;

    case 4:
      return `${date.getDate()} April ${date.getFullYear()}`;

    case 5:
      return `${date.getDate()} May ${date.getFullYear()}`;

    case 6:
      return `${date.getDate()} June ${date.getFullYear()}`;

    case 7:
      return `${date.getDate()} July ${date.getFullYear()}`;

    case 8:
      return `${date.getDate()} August ${date.getFullYear()}`;

    case 9:
      return `${date.getDate()} September ${date.getFullYear()}`;

    case 10:
      return `${date.getDate()} October ${date.getFullYear()}`;

    case 11:
      return `${date.getDate()} November ${date.getFullYear()}`;

    case 12:
      return `${date.getDate()} December ${date.getFullYear()}`;
  }
}

export default getDate;
