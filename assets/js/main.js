const header = document.querySelector('#header')
const descr = document.querySelector('#descr')
const img = document.querySelector('#img')
function plastinki(a) {
    header.innerHTML = blyat[a].header
    descr.innerHTML = blyat[a].descr
    img.setAttribute('src', blyat[a].img)
}
let blyat = [
    {
        header: 'Проводим консультацию',
        descr: 'Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамкахспецификации современных стандартов, некоторые особенности внутренней политики будут объективнорассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления.Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.',
        img: 'assets/image/eceb912c771d9e1a9f95a39b4b7f43df.jpeg'
    },
    {
        header: 'Составляем смету',
        descr: 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.',
        img: 'assets/image/c5bafda9adff551b2a45293699d4be78.jpeg'
    },
    {
        header: 'Привлекаем подрядчиков',
        descr: 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.',
        img: 'assets/image/38b41f3567a7e8a0e16ccfff1735cc36.jpeg'
    }, 
    {
        header: 'Инспектируем все этапы работ',
        descr: 'Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.',
        img: 'assets/image/46609a3c0c2fcd8d3f7e0ac01198970e.jpeg'
    }
]