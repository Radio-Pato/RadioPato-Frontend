import { useState,useEffect } from 'react';
import {getSections} from '../../utils/Services'
import axios from 'axios';
import styles from './BoxCommentComponent.module.css'
import { Link } from 'react-router-dom';

function BoxCommentComponent() {
    const [toggleState, setToggleState] = useState(0);
    const [section, setSection] = useState<any>([])

    const toggleTab = (index: number) => {
        if( !(toggleState === index) ){
            setToggleState(index);
        }
    };

    useEffect(() => {

        getSections()
        .then((res)=>{
            setSection(res.data.data)
        })

        }, [section])

    var comentariosGeneral = [
        'Proin nec ornare odio, porttitor convallis libero. Fusce non aliquam felis. Vivamus et tincidunt nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris libero tortor, accumsan at maximus vitae, accumsan a ipsum. Nulla ultrices nec purus tristique suscipit. Aenean ultrices volutpat ultricies. ',
        'Nullam nec dictum leo. Cras semper porta diam, et suscipit nulla porttitor ut. Suspendisse at eros ut nisl consectetur rhoncus eu vitae sem. Aenean aliquet risus mollis mi laoreet ultrices. Donec tincidunt efficitur malesuada. Ut lobortis purus sem, in tincidunt turpis pulvinar eget. Vestibulum at odio ex. ',
        'Morbi pellentesque vel tortor ac tincidunt. In convallis ornare fringilla. Nunc maximus lorem a purus consectetur, eu hendrerit turpis tincidunt. Mauris vulputate finibus libero, et egestas velit laoreet id. Duis sit amet bibendum velit. Maecenas aliquam, nunc sed blandit vulputate, leo purus finibus purus, eget tincidunt erat nisl ac turpis. Ut velit elit, euismod sed volutpat non, lacinia vitae tellus. Integer vitae tristique felis, ut ullamcorper magna. Integer nisl tellus, blandit quis consectetur id, porttitor at elit. Nunc ex ex, vehicula ac venenatis ac, cursus sit amet est. In sagittis arcu ex, vitae tincidunt est pulvinar quis. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula eleifend leo, quis condimentum odio commodo hendrerit. Donec vel diam accumsan, luctus neque vitae, placerat libero. Maecenas ornare, justo sit amet tincidunt cursus, leo augue eleifend orci, et accumsan tortor leo vel mi. Nullam vehicula mi elit, quis aliquam tellus pellentesque at. Etiam sit amet augue iaculis, euismod augue a, finibus sem. Quisque cursus tristique finibus. Fusce suscipit, leo ut ultrices luctus, nisi massa tempor dui, sit amet gravida ligula ligula at ante. Aliquam in turpis tincidunt, fringilla ligula id, ultricies urna. Nam consequat sit amet magna luctus tempor. Proin volutpat bibendum hendrerit. Nulla condimentum dui in nibh sodales, vel pretium tellus viverra. ',
        'Aliquam erat volutpat. Ut nec quam eros. Suspendisse suscipit ornare tortor, sed volutpat nisl vestibulum ac. Proin cursus fringilla elit, vel ultricies risus consequat non. Integer commodo sem quis ex rhoncus ultrices. Nulla nec ex vel sem pharetra cursus sed a sem. Nulla at viverra lacus. Duis viverra tincidunt lacinia. Sed iaculis justo quis metus fringilla, vel efficitur quam ultrices. Mauris eu orci pharetra, varius est non, mattis arcu. Maecenas ultricies tellus in sapien laoreet porttitor. In pharetra tincidunt mollis. Aenean consequat urna ut vehicula dignissim. ',
        'Pellentesque condimentum, quam at molestie luctus, diam dui aliquet arcu, vitae tincidunt eros risus ut massa. Donec porttitor aliquet eros, et luctus lectus consequat nec. Integer vehicula, dolor nec vestibulum posuere, lacus elit tempor velit, et gravida ante sapien ut diam. Nulla facilisi. Pellentesque pulvinar nunc turpis, ut ornare neque ultrices et. Sed quis dapibus dolor. Nullam augue est, blandit varius ex dictum, vulputate sodales augue. Nam quis risus at sapien laoreet vestibulum. In tempor in nibh non vehicula. Curabitur vel justo est. Ut sit amet sem placerat, ultrices ante ut, cursus erat. Nullam suscipit, dolor vel viverra vehicula, tortor eros congue erat, quis eleifend neque lectus quis ex. ',
        'Aenean libero dolor, blandit id metus at, tristique maximus augue. Nunc viverra lacus vitae varius molestie. Nunc viverra, eros non viverra condimentum, eros neque tristique nibh, ac gravida eros lectus eget ex. Fusce eu orci lectus. Nam pretium sagittis lorem non rutrum. Donec et mauris eget elit imperdiet lobortis. Curabitur scelerisque nisl in luctus sagittis. Mauris tristique ac leo nec tincidunt. Sed nec sem nisi. Nam accumsan iaculis elit vitae lobortis. Maecenas et diam lacus. Mauris maximus interdum tellus sollicitudin consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam auctor nulla eu mauris tempus, et maximus nisi consectetur. Suspendisse in turpis quis ex efficitur congue. Nam sit amet arcu tortor. ',
        'Quisque consectetur lorem nec urna dapibus consequat. Praesent non odio blandit, sodales augue at, placerat nulla. Maecenas mollis viverra neque eu faucibus. In metus dolor, fringilla eget leo at, faucibus aliquam turpis. Vivamus at magna eu nisi venenatis ullamcorper id sit amet purus. Aliquam a neque tempor, iaculis ipsum at, aliquam lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare lobortis libero vel laoreet. Vivamus maximus turpis dui, sed tincidunt felis dapibus ut. Nam erat magna, suscipit a consectetur a, cursus non justo. Suspendisse ultrices nibh quis venenatis sagittis. Curabitur eu vehicula orci. Aenean rutrum leo diam, et bibendum quam vestibulum quis. ',
        'Integer elementum rhoncus erat. Aliquam elementum mollis tortor, et congue ex ultrices quis. Aliquam malesuada ac sapien vitae fringilla. Sed eget volutpat turpis, blandit semper tortor. Phasellus consequat dapibus lacus sit amet vehicula. Cras quis tortor sit amet lectus auctor tincidunt vel eget libero. Morbi mi erat, ullamcorper sit amet euismod et, dictum in odio. Nulla ultricies suscipit neque, eget bibendum leo placerat in. Duis imperdiet orci sem, quis rhoncus risus mollis et. Suspendisse sagittis quis quam vel lobortis. Donec metus nisi, porta sed leo in, posuere tincidunt justo. Vivamus laoreet finibus urna, non tempus orci auctor quis. Phasellus eu malesuada turpis. ',
        'Praesent convallis tellus nulla, eget lacinia augue tincidunt vehicula. Cras placerat consequat sodales. Cras lacinia mauris quis tortor cursus commodo. Aliquam justo ipsum, sodales at pharetra in, porta eget turpis. In gravida consequat euismod. Vivamus porttitor varius tortor et pulvinar. Proin posuere, massa ut egestas egestas, tellus dolor faucibus ipsum, vitae vulputate dolor odio sollicitudin ante. Donec eu lorem nec augue tempor feugiat vel vel orci. Nunc semper odio vel tincidunt mollis. Sed at efficitur neque, a vestibulum tortor. Maecenas molestie mauris ultricies malesuada elementum. Pellentesque mollis, libero sollicitudin suscipit eleifend, urna lacus cursus velit, et tempus turpis neque ut purus. ',
    ];

    var comentariosComunicados = [
        'Aenean libero dolor, blandit id metus at, tristique maximus augue. Nunc viverra lacus vitae varius molestie. Nunc viverra, eros non viverra condimentum, eros neque tristique nibh, ac gravida eros lectus eget ex. Fusce eu orci lectus. Nam pretium sagittis lorem non rutrum. Donec et mauris eget elit imperdiet lobortis. Curabitur scelerisque nisl in luctus sagittis. Mauris tristique ac leo nec tincidunt. Sed nec sem nisi. Nam accumsan iaculis elit vitae lobortis. Maecenas et diam lacus. Mauris maximus interdum tellus sollicitudin consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam auctor nulla eu mauris tempus, et maximus nisi consectetur. Suspendisse in turpis quis ex efficitur congue. Nam sit amet arcu tortor. ',
        'Praesent convallis tellus nulla, eget lacinia augue tincidunt vehicula. Cras placerat consequat sodales. Cras lacinia mauris quis tortor cursus commodo. Aliquam justo ipsum, sodales at pharetra in, porta eget turpis. In gravida consequat euismod. Vivamus porttitor varius tortor et pulvinar. Proin posuere, massa ut egestas egestas, tellus dolor faucibus ipsum, vitae vulputate dolor odio sollicitudin ante. Donec eu lorem nec augue tempor feugiat vel vel orci. Nunc semper odio vel tincidunt mollis. Sed at efficitur neque, a vestibulum tortor. Maecenas molestie mauris ultricies malesuada elementum. Pellentesque mollis, libero sollicitudin suscipit eleifend, urna lacus cursus velit, et tempus turpis neque ut purus. ',
        'Quisque consectetur lorem nec urna dapibus consequat. Praesent non odio blandit, sodales augue at, placerat nulla. Maecenas mollis viverra neque eu faucibus. In metus dolor, fringilla eget leo at, faucibus aliquam turpis. Vivamus at magna eu nisi venenatis ullamcorper id sit amet purus. Aliquam a neque tempor, iaculis ipsum at, aliquam lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare lobortis libero vel laoreet. Vivamus maximus turpis dui, sed tincidunt felis dapibus ut. Nam erat magna, suscipit a consectetur a, cursus non justo. Suspendisse ultrices nibh quis venenatis sagittis. Curabitur eu vehicula orci. Aenean rutrum leo diam, et bibendum quam vestibulum quis. ',
        'Integer elementum rhoncus erat. Aliquam elementum mollis tortor, et congue ex ultrices quis. Aliquam malesuada ac sapien vitae fringilla. Sed eget volutpat turpis, blandit semper tortor. Phasellus consequat dapibus lacus sit amet vehicula. Cras quis tortor sit amet lectus auctor tincidunt vel eget libero. Morbi mi erat, ullamcorper sit amet euismod et, dictum in odio. Nulla ultricies suscipit neque, eget bibendum leo placerat in. Duis imperdiet orci sem, quis rhoncus risus mollis et. Suspendisse sagittis quis quam vel lobortis. Donec metus nisi, porta sed leo in, posuere tincidunt justo. Vivamus laoreet finibus urna, non tempus orci auctor quis. Phasellus eu malesuada turpis. ',
        'Morbi pellentesque vel tortor ac tincidunt. In convallis ornare fringilla. Nunc maximus lorem a purus consectetur, eu hendrerit turpis tincidunt. Mauris vulputate finibus libero, et egestas velit laoreet id. Duis sit amet bibendum velit. Maecenas aliquam, nunc sed blandit vulputate, leo purus finibus purus, eget tincidunt erat nisl ac turpis. Ut velit elit, euismod sed volutpat non, lacinia vitae tellus. Integer vitae tristique felis, ut ullamcorper magna. Integer nisl tellus, blandit quis consectetur id, porttitor at elit. Nunc ex ex, vehicula ac venenatis ac, cursus sit amet est. In sagittis arcu ex, vitae tincidunt est pulvinar quis. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula eleifend leo, quis condimentum odio commodo hendrerit. Donec vel diam accumsan, luctus neque vitae, placerat libero. Maecenas ornare, justo sit amet tincidunt cursus, leo augue eleifend orci, et accumsan tortor leo vel mi. Nullam vehicula mi elit, quis aliquam tellus pellentesque at. Etiam sit amet augue iaculis, euismod augue a, finibus sem. Quisque cursus tristique finibus. Fusce suscipit, leo ut ultrices luctus, nisi massa tempor dui, sit amet gravida ligula ligula at ante. Aliquam in turpis tincidunt, fringilla ligula id, ultricies urna. Nam consequat sit amet magna luctus tempor. Proin volutpat bibendum hendrerit. Nulla condimentum dui in nibh sodales, vel pretium tellus viverra. ',
        'Aliquam erat volutpat. Ut nec quam eros. Suspendisse suscipit ornare tortor, sed volutpat nisl vestibulum ac. Proin cursus fringilla elit, vel ultricies risus consequat non. Integer commodo sem quis ex rhoncus ultrices. Nulla nec ex vel sem pharetra cursus sed a sem. Nulla at viverra lacus. Duis viverra tincidunt lacinia. Sed iaculis justo quis metus fringilla, vel efficitur quam ultrices. Mauris eu orci pharetra, varius est non, mattis arcu. Maecenas ultricies tellus in sapien laoreet porttitor. In pharetra tincidunt mollis. Aenean consequat urna ut vehicula dignissim. ',
        'Pellentesque condimentum, quam at molestie luctus, diam dui aliquet arcu, vitae tincidunt eros risus ut massa. Donec porttitor aliquet eros, et luctus lectus consequat nec. Integer vehicula, dolor nec vestibulum posuere, lacus elit tempor velit, et gravida ante sapien ut diam. Nulla facilisi. Pellentesque pulvinar nunc turpis, ut ornare neque ultrices et. Sed quis dapibus dolor. Nullam augue est, blandit varius ex dictum, vulputate sodales augue. Nam quis risus at sapien laoreet vestibulum. In tempor in nibh non vehicula. Curabitur vel justo est. Ut sit amet sem placerat, ultrices ante ut, cursus erat. Nullam suscipit, dolor vel viverra vehicula, tortor eros congue erat, quis eleifend neque lectus quis ex. ',
        'Proin nec ornare odio, porttitor convallis libero. Fusce non aliquam felis. Vivamus et tincidunt nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris libero tortor, accumsan at maximus vitae, accumsan a ipsum. Nulla ultrices nec purus tristique suscipit. Aenean ultrices volutpat ultricies. ',
        'Nullam nec dictum leo. Cras semper porta diam, et suscipit nulla porttitor ut. Suspendisse at eros ut nisl consectetur rhoncus eu vitae sem. Aenean aliquet risus mollis mi laoreet ultrices. Donec tincidunt efficitur malesuada. Ut lobortis purus sem, in tincidunt turpis pulvinar eget. Vestibulum at odio ex. ',
    ];

    var comentariosEventos = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula eleifend leo, quis condimentum odio commodo hendrerit. Donec vel diam accumsan, luctus neque vitae, placerat libero. Maecenas ornare, justo sit amet tincidunt cursus, leo augue eleifend orci, et accumsan tortor leo vel mi. Nullam vehicula mi elit, quis aliquam tellus pellentesque at. Etiam sit amet augue iaculis, euismod augue a, finibus sem. Quisque cursus tristique finibus. Fusce suscipit, leo ut ultrices luctus, nisi massa tempor dui, sit amet gravida ligula ligula at ante. Aliquam in turpis tincidunt, fringilla ligula id, ultricies urna. Nam consequat sit amet magna luctus tempor. Proin volutpat bibendum hendrerit. Nulla condimentum dui in nibh sodales, vel pretium tellus viverra. ',
        'Aliquam erat volutpat. Ut nec quam eros. Suspendisse suscipit ornare tortor, sed volutpat nisl vestibulum ac. Proin cursus fringilla elit, vel ultricies risus consequat non. Integer commodo sem quis ex rhoncus ultrices. Nulla nec ex vel sem pharetra cursus sed a sem. Nulla at viverra lacus. Duis viverra tincidunt lacinia. Sed iaculis justo quis metus fringilla, vel efficitur quam ultrices. Mauris eu orci pharetra, varius est non, mattis arcu. Maecenas ultricies tellus in sapien laoreet porttitor. In pharetra tincidunt mollis. Aenean consequat urna ut vehicula dignissim. ',
        'Pellentesque condimentum, quam at molestie luctus, diam dui aliquet arcu, vitae tincidunt eros risus ut massa. Donec porttitor aliquet eros, et luctus lectus consequat nec. Integer vehicula, dolor nec vestibulum posuere, lacus elit tempor velit, et gravida ante sapien ut diam. Nulla facilisi. Pellentesque pulvinar nunc turpis, ut ornare neque ultrices et. Sed quis dapibus dolor. Nullam augue est, blandit varius ex dictum, vulputate sodales augue. Nam quis risus at sapien laoreet vestibulum. In tempor in nibh non vehicula. Curabitur vel justo est. Ut sit amet sem placerat, ultrices ante ut, cursus erat. Nullam suscipit, dolor vel viverra vehicula, tortor eros congue erat, quis eleifend neque lectus quis ex. ',
        'Proin nec ornare odio, porttitor convallis libero. Fusce non aliquam felis. Vivamus et tincidunt nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris libero tortor, accumsan at maximus vitae, accumsan a ipsum. Nulla ultrices nec purus tristique suscipit. Aenean ultrices volutpat ultricies. ',
        'Aenean libero dolor, blandit id metus at, tristique maximus augue. Nunc viverra lacus vitae varius molestie. Nunc viverra, eros non viverra condimentum, eros neque tristique nibh, ac gravida eros lectus eget ex. Fusce eu orci lectus. Nam pretium sagittis lorem non rutrum. Donec et mauris eget elit imperdiet lobortis. Curabitur scelerisque nisl in luctus sagittis. Mauris tristique ac leo nec tincidunt. Sed nec sem nisi. Nam accumsan iaculis elit vitae lobortis. Maecenas et diam lacus. Mauris maximus interdum tellus sollicitudin consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam auctor nulla eu mauris tempus, et maximus nisi consectetur. Suspendisse in turpis quis ex efficitur congue. Nam sit amet arcu tortor. ',
        'Integer elementum rhoncus erat. Aliquam elementum mollis tortor, et congue ex ultrices quis. Aliquam malesuada ac sapien vitae fringilla. Sed eget volutpat turpis, blandit semper tortor. Phasellus consequat dapibus lacus sit amet vehicula. Cras quis tortor sit amet lectus auctor tincidunt vel eget libero. Morbi mi erat, ullamcorper sit amet euismod et, dictum in odio. Nulla ultricies suscipit neque, eget bibendum leo placerat in. Duis imperdiet orci sem, quis rhoncus risus mollis et. Suspendisse sagittis quis quam vel lobortis. Donec metus nisi, porta sed leo in, posuere tincidunt justo. Vivamus laoreet finibus urna, non tempus orci auctor quis. Phasellus eu malesuada turpis. ',
        'Morbi pellentesque vel tortor ac tincidunt. In convallis ornare fringilla. Nunc maximus lorem a purus consectetur, eu hendrerit turpis tincidunt. Mauris vulputate finibus libero, et egestas velit laoreet id. Duis sit amet bibendum velit. Maecenas aliquam, nunc sed blandit vulputate, leo purus finibus purus, eget tincidunt erat nisl ac turpis. Ut velit elit, euismod sed volutpat non, lacinia vitae tellus. Integer vitae tristique felis, ut ullamcorper magna. Integer nisl tellus, blandit quis consectetur id, porttitor at elit. Nunc ex ex, vehicula ac venenatis ac, cursus sit amet est. In sagittis arcu ex, vitae tincidunt est pulvinar quis. ',
        'Praesent convallis tellus nulla, eget lacinia augue tincidunt vehicula. Cras placerat consequat sodales. Cras lacinia mauris quis tortor cursus commodo. Aliquam justo ipsum, sodales at pharetra in, porta eget turpis. In gravida consequat euismod. Vivamus porttitor varius tortor et pulvinar. Proin posuere, massa ut egestas egestas, tellus dolor faucibus ipsum, vitae vulputate dolor odio sollicitudin ante. Donec eu lorem nec augue tempor feugiat vel vel orci. Nunc semper odio vel tincidunt mollis. Sed at efficitur neque, a vestibulum tortor. Maecenas molestie mauris ultricies malesuada elementum. Pellentesque mollis, libero sollicitudin suscipit eleifend, urna lacus cursus velit, et tempus turpis neque ut purus. ',
        'Quisque consectetur lorem nec urna dapibus consequat. Praesent non odio blandit, sodales augue at, placerat nulla. Maecenas mollis viverra neque eu faucibus. In metus dolor, fringilla eget leo at, faucibus aliquam turpis. Vivamus at magna eu nisi venenatis ullamcorper id sit amet purus. Aliquam a neque tempor, iaculis ipsum at, aliquam lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare lobortis libero vel laoreet. Vivamus maximus turpis dui, sed tincidunt felis dapibus ut. Nam erat magna, suscipit a consectetur a, cursus non justo. Suspendisse ultrices nibh quis venenatis sagittis. Curabitur eu vehicula orci. Aenean rutrum leo diam, et bibendum quam vestibulum quis. ',
    ];

    let  n = 0
   if(section.length <= 0 ){
       console.log("prueba setion", section)
       return <p>loading ...</p>
   }else {
    return (

        <>
             <div className={styles.tabs__container}>
            {
                section.map( (item:any, index: number) => (
                    <Link to={''} key={item._id } onClick={() => toggleTab(index)} className={toggleState === index ? `${styles.tab} ${styles.active}` : styles.tab}>
                        {item.title}
                    </Link>
                )
            )}
            </div>
             {/*    <a onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.tab} ${styles.active}` : styles.tab}>General</a>
                <a onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.tab} ${styles.active}` : styles.tab}>Comunicados</a>
                <a onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.tab} ${styles.active}` : styles.tab}>Eventos</a>
                <button >edictar secciones</button>
             */}

            <div className={toggleState === 0 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
                {
                    comentariosGeneral.map( comentario =>
                    <div key={comentario} className={styles.comment}>
                        <p>{comentario}</p>
                    </div>
                    )
                }
            </div>

            <div className={toggleState === 1 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
                {
                    comentariosComunicados.map( comentario =>
                    <div key={comentario} className={styles.comment}>
                        <p>{comentario}</p>
                    </div>
                    )
                }
            </div>

            <div className={toggleState === 2 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
                {
                    comentariosEventos.map( comentario =>
                    <div key={comentario}  className={styles.comment}>
                        <p>{comentario}</p>
                    </div>
                    )
                }
            </div>
        </>
    )
   }

    /* return (

        <>
        <ul className={styles.tabs__container}>
            <li onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.tab} ${styles.active}` : styles.tab}> {section[0].title} </li>
            <li onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.tab} ${styles.active}` : styles.tab}>Comunicados</li>
            <li onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.tab} ${styles.active}` : styles.tab}>Eventos</li>
        </ul> */
      {/*   <div className={styles.tabs__container}>
            <a onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.tab} ${styles.active}` : styles.tab}>General</a>
            <a onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.tab} ${styles.active}` : styles.tab}>Comunicados</a>
            <a onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.tab} ${styles.active}` : styles.tab}>Eventos</a>
            <button >edictar secciones</button>
        </div>

        <div className={toggleState === 1 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
            {
                comentariosGeneral.map( comentario =>
                <div className={styles.comment}>
                    <p>{comentario}</p>
                </div>
                )
            }
        </div>

        <div className={toggleState === 2 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
            {
                comentariosComunicados.map( comentario =>
                <div className={styles.comment}>
                    <p>{comentario}</p>
                </div>
                )
            }
        </div>

        <div className={toggleState === 3 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
            {
                comentariosEventos.map( comentario =>
                <div className={styles.comment}>
                    <p>{comentario}</p>
                </div>
                )
            }
        </div> */}
   /*      </>
    ) */
}


export default BoxCommentComponent