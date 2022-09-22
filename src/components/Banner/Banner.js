import style from './Banner.module.scss'

const Banner = () => {
  return (
    <header className={style.banner}>
      <div className={style.banner__content}>
        <h1 className={style.banner__title}>
          Lorem Ipsum
        </h1>
        <div className={style.banner__buttons}>
          <button className={style.banner__button}>Play</button>
          <button className={style.banner__button}>My List</button>
        </div>
        <p className={style.banner__description}>
          Banner description
        </p>
      </div>
      <div className={style.banner__fade}>
        Lorem ipsum sit amet sramet pierdziamet
      </div>
    </header>
  )
}

export default Banner;