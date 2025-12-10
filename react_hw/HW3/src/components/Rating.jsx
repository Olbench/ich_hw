import { useState } from "react";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = [
    "https://images.techinsider.ru/upload/img_cache/9b5/9b56c003d032ee25521915f222270108_cropped_510x510.webp",
    "https://n1s1.hsmedia.ru/be/90/34/be9034d762857e5ba510937ce31b14b9/728x728_1_666010ab55120072825c74de5a7e19b0@1000x1000_0x10fmyjvQ_7882540427738188474.jpg.webp",
    "https://n1s1.hsmedia.ru/b1/1e/b3/b11eb3f02689ff05f8efb8b6c5adaa38/800x1000_0xX0j2g9XR_8576102882154523695.jpg",
    "https://memi.klev.club/uploads/posts/2024-12/memi-klev-club-ou7y-p-memi-koti-bez-nadpisei-na-avu-2.jpg",
  ];
  return (
    <>
      <img
        width="300px"
        src={ratingList[ratingValue]}
        alt={`Rating ${ratingValue}`}
      />
      <div>
        <button onClick={() => setRatingValue(0)}>Плохо</button>
        <button onClick={() => setRatingValue(1)}>Приемлимо</button>
        <button onClick={() => setRatingValue(2)}>Хорошо</button>
        <button onClick={() => setRatingValue(3)}>Отлично</button>
      </div>
    </>
  );
}

export default Rating;
