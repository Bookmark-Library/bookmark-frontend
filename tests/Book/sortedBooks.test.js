describe('sorting books', () => {
  const libraries = [
    {
      book: {
        title: 'B',
        publicationDate: '2022-01-01',
        editor: 'C',
      },
      id: 1,
    },
    {
      book: {
        title: 'A',
        publicationDate: '2021-01-01',
        editor: 'B',
      },
      id: 2,
    },
    {
      book: {
        title: 'C',
        publicationDate: '2023-01-01',
        editor: 'A',
      },
      id: 3,
    },
  ];

  it('sorts books by title', () => {
    const sortBy = 'title';
    const sortedBooks = [...libraries].sort((a, b) => {
      if (sortBy === 'title') {
        return a.book.title.localeCompare(b.book.title);
      }
      return 0;
    });
    const expected = [
      {
        book: {
          title: 'A',
          publicationDate: '2021-01-01',
          editor: 'B',
        },
        id: 2,
      },
      {
        book: {
          title: 'B',
          publicationDate: '2022-01-01',
          editor: 'C',
        },
        id: 1,
      },
      {
        book: {
          title: 'C',
          publicationDate: '2023-01-01',
          editor: 'A',
        },
        id: 3,
      },
    ];
    expect(sortedBooks).toEqual(expected);
  });
  it('sorts books by addDate', () => {
    const sortBy = 'addDate';
    const sortedBooks = [...libraries].sort((a, b) => {
      if (sortBy === 'addDate') {
        return b.id - (a.id);
      }
      return 0;
    });
    const expected = [
      {
        book: {
          title: 'C',
          publicationDate: '2023-01-01',
          editor: 'A',
        },
        id: 3,
      },
      {
        book: {
          title: 'A',
          publicationDate: '2021-01-01',
          editor: 'B',
        },
        id: 2,
      },
      {
        book: {
          title: 'B',
          publicationDate: '2022-01-01',
          editor: 'C',
        },
        id: 1,
      },
    ];
    expect(sortedBooks).toEqual(expected);
  });
  
  
});
