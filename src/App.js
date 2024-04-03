import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import { useState, useEffect } from 'react';

function App() {

  // movie data
  const [movies, setMovies] = useState(
    [
      {
        Title: 'Salaar',
        Year: '1977',
        imdbID: 'tt0076759',
        Type: 'movie',
        item: "general",
        Poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVnW-31DF-m43e8k_OW2_hFwyl17HqnpGHA&usqp=CAU",
        category: "action"
      },
      {
        Title: 'Ram-Leela',
        Year: '1980',
        imdbID: 'tt0080684',
        Type: 'movie',
        item: "general",
        Poster:
          'https://avatars.mds.yandex.net/i?id=75b5609a0c2d65067dd1339b2dd5e3b635421b9e-9040073-images-thumbs&n=13',
        category: "adventure"
      },
      {
        Title: 'Tere-Naam',
        Year: '1983',
        imdbID: 'tt0086190',
        item: "general",
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=f0ba66ac8c6e139ef5c211a33ca2dc3a-4835198-images-thumbs&n=13',
        category: "romance"
      },
      {
        Title: 'Kgf Rocky',
        Year: '1993',
        imdbID: 'tt0086190',
        item: "general",
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=87a387a8b3ede646da22a4c2370ee2e15f3fd84b-9150090-images-thumbs&n=13',
        category: "crime"
      },
      {
        Title: 'Pushpa Fire',
        Year: '1976',
        imdbID: 'tt0086190',
        item: "general",
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=0e44dda4927ce89ecfd4246dee7a55fda146e35f-9858395-images-thumbs&n=13',
        category: "action"
      },
      {
        Title: 'Fighter',
        Year: '1984',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "trending",
        Poster:
          'data:image/jpeg;base64,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',
        category: "comedy"
      },
      {
        Title: 'Bahubali',
        Year: '1993',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "trending",
        Poster:
          'https://avatars.mds.yandex.net/i?id=dd386873f0a7ac3bb3606b8186cb052b6becddb5-10639540-images-thumbs&n=13',
        category: "thriller"
      },
      {
        Title: 'Mohanjodharo',
        Year: '1963',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "trending",
        Poster:
          'https://avatars.mds.yandex.net/i?id=90b69a5994c8fdd0bebd8d9bbb13ec5157141e05-5225035-images-thumbs&n=13',
        category: "family"
      },
      {
        Title: 'Mohabbatein',
        Year: '1943',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "upcoming",
        Poster:
          'https://avatars.mds.yandex.net/i?id=b8d9bcdd946918d4f6cfbdf1765ba1f7e685ffc2-5251286-images-thumbs&n=13',
        category: "family"
      },
      {
        Title: 'Omg',
        Year: '1943',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "upcoming",
        Poster:
          'https://avatars.mds.yandex.net/i?id=efe92aece6293502c3c0bb271175844b742872ab-10385057-images-thumbs&n=13',
        category: "comedy"
      },
      {
        Title: 'Hero',
        Year: '2004',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=76b99b98d50f84bf38644230239928bf8f2af4d9-9072236-images-thumbs&n=13',
        category: "crime"
      },
      {
        Title: 'Shultan',
        Year: '2009',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "upcoming",
        Poster:
          'https://yandex-images.clstorage.net/la9oz6435/b31fbeMCU/JT4WbFhGtYcSwpXahWqWgMNINxkr7yP81LbGF3CL5NUf4aaxnSOE3X4Httj62P4Q_wA33fPmRCwDNsETtLi1vWgrTjlpS7naQ5-Vr6BaiqTTNRtsC-4_jZyamnoAs-jUhw07bQ3acAS7-xpki5mXRaokboHH1-2wW0eRH4ENRQQlctowDK50h_7ibLr9-pIgN_0bjauWo0k4vjNWmZqFgOdhh8Xt8ixwU_8SEP-B-20u4RIpZ1etyX97jV_5LamYjd5KJNiWxBOqaghWXTJywHelE63v-otdoEqL_r3SofxbXQ_FsZLQbBsrHjS__bftVlG2ufdTodGXB_nHlcXJcMkOOix87uQ3spaYiiF6upzz4ctBY1oTjRRSj679YjEoHxmnOc06XJhbr9Z8L8kXMZJJsqX3K12dS-9lK42tWXSVDqrcPDIcF6pyRPb1spY8A_1HuTNazxEYljfKbQbF3L8lKwFNnsj8o2uK9HOFmz2ykb7pE8e5pbPnadPpocE4iSIimACuSLeSnuhyWU6mqEdxzwn7LvtR-NrjyiWmZaRfERulkaJg-McnjvQHtacFclEaNVunLUWfd2kfuVHliLU6enwEVuhfKo4UNnXmehxj5U-NE2Z_gWgu277tGmUwv8X7-eGCZHQbax7M-0lvgRrRCkUztz2Vw8uxq-VFLaCRPnJYPKKcB5pOsN5xcno0HwmLAbNq-4l4ip9avQKNkPe980W9ehRg2zu6bCOV_xV--RpVo9sJidfHeYOx8enwMUqObBwuJINCwoR6_TYqCHfB2-1fYtMV7ILjxnX6lbQnebclMerIVMejWsT7fft5ipVGnUMn0QGPS8E7kV257EX2gqD4ntR3egK41mlWRqz3vZst5y6_ERC6W0oxSv1UwzmjqR2ybCzHAwaYo0XziVYBbjE3U6l5T3MVMzVxqQCBPjoI_DYYN4KOFDY51m64441fCRMy0xmAcvN6aSY0',
        category: "thriller"
      },
      {
        Title: 'Chhenai-Express',
        Year: '1943',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "upcoming",
        Poster:
          'https://avatars.mds.yandex.net/i?id=8184f6f99db3a5579611df415f42d11a-4256359-images-thumbs&n=13',
        category: "drama"
      },
      {
        Title: 'Avattar',
        Year: '1943',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://yandex-images.clstorage.net/la9oz6435/b31fbeMCU/JT4WbFhGtYcSwpXahWqWgMNINxkr7yP81LbGF2HP7ME6uPfkwEeBgUdq35WPiM9drkwOmePnGC1Kcuhe9IntoDg7S2VpW73-Z5O5v9VKmpTLPUIVb55L7aDfz1tMg-Fkh3U7YXmaBGiDwwa466W_Qd99WrHPH-xNMx-lJ11VUaw1rh5s_ILAZxZmgP51Uh5wAz2jtRcCj0mEduPCZe61BOvJk4FRxnCAh8tyzPPJl8UaAfIRT1-VaQ8D5V99uc0EmT4KuMQyVDOeAmxevbL-MFs1g_F7KpvRcM5L5i3KybjXQZPdMTpsyFPHVoyPhRe9qqVigUtTjYFzd30zldklQElOAhy8EnArYpKwIvV6orQf7W9927JLZWjKG6adWh38k-lvoZm2mIjXDx4cuyXLebKhfoEzr8Fdm-uRK_1JIRxJ3vJcYOpQM4ZOzPY9VgJEA2GXLdtu12mscn82-a7pXK9lVyE9IvxwE1OWQPepx1lqrTJl30v5pZPnaU_x0W0AZVa2YPy-8Atq4khawWaWAI_pJ-WvWpeJ4KZ_flkOkbybVfP9AYr4FF9XljTHlf-ZqgnuLb_fGYkD56UfAfXdPH0OUmQEHhizeh4Mdmm6IiQbaaMN595HGRSeC7blDgVcT7WvjSGOdMgTx67IO1178SoZnkWvz8nVvz8RQxU99Rh5BnZc8GpAA7q65HL9ugpY960vretaTwmw2u_m_ealFDe9E9HZ_mAIQ2MOEOfN75UCCY7Vw_vVwbP3OReh-aW4DfpCfHzSxNs2jkD-ueo2MD_9w0HjctOduKZzLgX-gcTz-XNdSSJUFNuDpsgPyYNhblVGNT8jXZk_T4E3Dam5zLH2jpjMIjDj9rLsatmGkrBDvQP5rx7XYYAe_2q1lmEgs-3_cRGGLBR73_qQN8Fzvfp96kFLWyVZB5uJkyG5VQh5TiacZO5wG3oeDDpZroakc3knDbNy3_FIts8y2V4U',
        category: "adventure"
      },
      {
        Title: 'Takken-3',
        Year: '1973',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "upcoming",
        Poster:
          'https://yandex-images.clstorage.net/la9oz6435/b31fbeMCU/JT4WbFhGtYcSwpXahWqWgMNINxkr7yP81LbGFiHT6P0v-Pfs1TeQwAY_t42ywPtc4w1CmL66cBgGbuhK6KSg9WwvQilpW7Hea4e5g9VKmpTLPUIVb55L7aDfz2YNh8GhDrTzFXmiSETj23Z4czkXMbp9Rpma2x1xb9NcG9Xd-ZTB3r44SMb074Ze4DrR2vaMQxW_weuqs02ALkfyFSKZOCfZp3UVHuCky4cCkHcxY0WiEW4dX6e10e-TJT_pwbns4TIikORW4Du-7nRuWb4aLIv1X4GzopMJ7AZTauGaMRxv_dvJKZbg-Kt7HtijPUcF3l3uZe8DJUHrnz3XlbUhgAlSytQ0Juifxs5QdqUuxlDDPQMF93p_hUyeg975nmFc320PjW0-HIQD9-qYJ_UPler9MqH3BzlBk2NxC30pzZhhws6INLYY3xo2cG5B8rqECxGj9ev2h9VMQh_SPSYFzLuZ-y1RsiQEp2OOYOOph8mmcT6BLwt1pX-HSfN1JTX8bVqClBg-XOOGYtBWrV4-KPchN7FnfjcdOHZfMnHyBYQbOYPNZYKA2JvLigSvrYe9lk0GQe-vqe0fE6nf5SX5rJ1-MqgAZrjnfsI47r2iegRf_YOV8_6z9XDyj6KFynFMpzkXLbFi3Ki7zwbY4z2_QWqFgilvv9mFDwN5g1n9TfCJthqMBG6c34q2YF59BpIAy_2r6R86P1V8doeyIY6VHL_Rt2XJamD0Q78SGLOZH5m2FRZNR6_JFWM3ZZdVNWWkPXJKLHCSqP8GDuSG8TI2jI-tl4HXatO5dF4bJinyCdRHyZO1DS4AeNNjJgQrebdBXhF6uSvzAfWf7-3P2Y3dhJEiVljMnmQbtv4QvjEOmhjvwTMBqyoTATgyH9oRSoWQ96FzUU06jFSLx14EiyXrGWYZimW_262B65eVD-FZ1SC9MrqcBCbMHx4yUEa9onpIb-knFZvuN_UkXhdK2eK0',
        category: "history"
      },
      {
        Title: 'Star-Take',
        Year: '1948',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "favourite",
        Poster:
          'https://avatars.mds.yandex.net/i?id=3dbb71af5d770e426ca3854539679757dff7e3da-5987336-images-thumbs&n=13',
        category: "war"
      },
      {
        Title: 'Fant4stick',
        Year: '1913',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=5dc7495f212ea34280f5f57d682db7cec014504c-9837641-images-thumbs&n=13',
        category: "comedy"
      },
      {
        Title: 'Avattar-2',
        Year: '1923',
        imdbID: 'tt0086190',
        Type: 'movie',
        item: "favourite",
        Poster:
          'https://yandex-images.clstorage.net/la9oz6435/b31fbeMCU/JT4WbFhGtYcSwpXahWqWgMNINxkr7yP81LbGF1yT7NU7_afw1ELFhBo-_5GPlbYE8lVT1f6_HVQac7US5KXw4Wg_ci1pa73ye7eBs9VKmpTLPUIVb55L7aDfz2YNh8GhDrTzFXmiSETj23Z4czkXMbp9Rpma2x1xb9NcG9Xd-ZTB3r44SMb074Ze4DrR2vaMQxW_weuqs02ALkfyFSKZOCfZp3UVHuCky4cCkHcxY0WiEW4dX6e10e-TJT_pwbns4TIikORW4Du-7nRuWb4aLIv1X4GzopMJ7AZTauGaMRxv_dvJKZbg-Kt7HtijPUcF3l3uZe8DJUHrnz3XlbUhgAlSytQ0Juifxs5QdqUuxlDDPQMF93p_hUyeg975nmFc320PjW0-HIQD9-qYJ_UPler9MqH3BzlBk2NxC30pzZhhws6INLYY3xo2cG5B8rqECxGj9ev2h9VMQh_SPSYFzLuZ-y1RsiQEp2OOYOOph8mmcT6BLwt1pX-HSfN1JTX8bVqClBg-XOOGYtBWrV4-KPchN7FnfjcdOHZfMnHyBYQbOYPNZYKA2JvLigSvrYe9lk0GQe-vqe0fE6nf5SX5rJ1-MqgAZrjnfsI47r2iegRf_YOV8_6z9XDyj6KFynFMpzkXLbFi3Ki7zwbY4z2_QWqFgilvv9mFDwN5g1n9TfCJthqMBG6c34q2YF59BpIAy_2r6R86P1V8doeyIY6VHL_Rt2XJamD0Q78SGLOZH5m2FRZNR6_JFWM3ZZdVNWWkPXJKLHCSqP8GDuSG8TI2jI-tl4HXatO5dF4bJinyCdRHyZO1DS4AeNNjJgQrebdBXhF6uSvzAfWf7-3P2Y3dhJEiVljMnmQbtv4QvjEOmhjvwTMBqyoTATgyH9oRSoWQ96FzUU06jFSLx14EiyXrGWYZimW_262B65eVD-FZ1SC9MrqcBCbMHx4yUEa9onpIb-knFZvuN_UkXhdK2eK0',
        category: "thriller"
      },
      {
        Title: 'Drive',
        Year: '1944',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=ee42b874cc0b8b517a28b94f6b192107e4f33e54-4567142-images-thumbs&n=13',
        category: "romance",
        item: "favourite",
      },
      {
        Title: 'Due-Dates',
        Year: '1990',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=55c973312db3587ec699ebf1bb31f051-5232689-images-thumbs&n=13',
        category: "comedy",
        item: "favourite",
      },
    ]
  );

  useEffect(() => {
    let all = [...movies]
    let Data = localStorage.setItem("user", JSON.stringify(all));
    setMovies(Data);
  }, [])
  useEffect(() => {
    let old = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setMovies(old);
  }, [])
  return (

    <div style={{ width: "300px" }}>
      <Header setMovies={setMovies} />
    </div>



  );
}

export default App;
