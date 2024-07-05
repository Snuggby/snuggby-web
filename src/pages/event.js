import style from '@/styles/event.module.scss'

const Event = () => {
    return <>
    <div class={style.container}>
      <div class={style.wrapper}>
        <div class={style.content}>
          <div class={style.item}>
            <h1 className={style.title}>COMING SOON</h1>
            <p className={style.description}>This part of the website is under construction.</p>
          </div>
        </div>
      </div>
    </div>
    </>
};

export default Event;