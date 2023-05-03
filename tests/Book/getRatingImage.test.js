describe('get rating image', () => {
 const getRatingImage = () => {
  switch (rating) {
    case 0:
      return (
        <>
          <img src={rateGrey} alt="0/5" />
          <img src={rateGrey} alt="0/5" />
          <img src={rateGrey} alt="0/5" />
          <img src={rateGrey} alt="0/5" />
          <img src={rateGrey} alt="0/5" />
        </>
      );
    case 1:
      return (
        <>
          <img src={rateyellow} alt="1/5" />
          <img src={rateGrey} alt="1/5" />
          <img src={rateGrey} alt="1/5" />
          <img src={rateGrey} alt="1/5" />
          <img src={rateGrey} alt="1/5" />
        </>
      );

    case 2:
      return (
        <>
          <img src={rateyellow} alt="2/5" />
          <img src={rateyellow} alt="2/5" />
          <img src={rateGrey} alt="2/5" />
          <img src={rateGrey} alt="2/5" />
          <img src={rateGrey} alt="2/5" />
        </>
      );

    case 3:
      return (
        <>
          <img src={rateyellow} alt="3/5" />
          <img src={rateyellow} alt="3/5" />
          <img src={rateyellow} alt="3/5" />
          <img src={rateGrey} alt="3/5" />
          <img src={rateGrey} alt="3/5" />
        </>
      );
    case 4:
      return (
        <>
          <img src={rateyellow} alt="4/5" />
          <img src={rateyellow} alt="4/5" />
          <img src={rateyellow} alt="4/5" />
          <img src={rateyellow} alt="4/5" />
          <img src={rateGrey} alt="4/5" />
        </>
      );
    case 5:
      return (
        <>
          <img src={rateyellow} alt="5/5" />
          <img src={rateyellow} alt="5/5" />
          <img src={rateyellow} alt="5/5" />
          <img src={rateyellow} alt="5/5" />
          <img src={rateyellow} alt="5/5" />
        </>
      );
    default:
      return null; // no image will be displayed if the rating is invalid
  }
};
  it('returns the correct rating images', () => {
    const rateGrey = '../../../assets/images/note-gris.svg';
    const rateyellow = '../../../assets/images/note-jaune.svg';
    expect(getRatingImage(0)).toEqual(
      <>
        <img src={rateGrey} alt="0/5" />
        <img src={rateGrey} alt="0/5" />
        <img src={rateGrey} alt="0/5" />
        <img src={rateGrey} alt="0/5" />
        <img src={rateGrey} alt="0/5" />
      </>
    );
    expect(getRatingImage(1)).toEqual(
      <>
        <img src={rateyellow} alt="1/5" />
        <img src={rateGrey} alt="1/5" />
        <img src={rateGrey} alt="1/5" />
        <img src={rateGrey} alt="1/5" />
        <img src={rateGrey} alt="1/5" />
      </>
    );
    expect(getRatingImage(2)).toEqual(
      <>
        <img src={rateyellow} alt="2/5" />
        <img src={rateyellow} alt="2/5" />
        <img src={rateGrey} alt="2/5" />
        <img src={rateGrey} alt="2/5" />
        <img src={rateGrey} alt="2/5" />
      </>
    );
    expect(getRatingImage(3)).toEqual(
      <>
        <img src={rateyellow} alt="3/5" />
        <img src={rateyellow} alt="3/5" />
        <img src={rateyellow} alt="3/5" />
        <img src={rateGrey} alt="3/5" />
        <img src={rateGrey} alt="3/5" />
      </>
    );
    expect(getRatingImage(4)).toEqual(
      <>
        <img src={rateyellow} alt="4/5" />
        <img src={rateyellow} alt="4/5" />
        <img src={rateyellow} alt="4/5" />
        <img src={rateyellow} alt="4/5" />
        <img src={rateGrey} alt="4/5" />
      </>
    );
    expect(getRatingImage(5)).toEqual(
      <>
        <img src={rateyellow} alt="5/5" />
        <img src={rateyellow} alt="5/5" />
        <img src={rateyellow} alt="5/5" />
        <img src={rateyellow} alt="5/5" />
        <img src={rateyellow} alt="5/5" />
      </>
    );
    expect(getRatingImage(6)).toEqual(null);
  });
  
})
