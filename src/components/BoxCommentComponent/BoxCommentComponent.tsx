import { useState, useEffect } from "react";
import {
  getSections,
  getComments,
  deleteComents,
  createComent,
} from "../../utils/Services";
import styles from "./BoxCommentComponent.module.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

function BoxCommentComponent() {
  const owner = Cookies.get("email");
  const [toggleState, setToggleState] = useState(0);
  const [section, setSection] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);

  const [comentario, setComentario] = useState<any>({ comentario: "" });
  const { handleSubmit } = useForm<any>();

  const toggleTab = (index: number) => {
    if (!(toggleState === index)) {
      setToggleState(index);
    }
  };

  useEffect(() => {
    getSections().then((res) => {
      setSection(res.data.data);
    });
  }, [section]);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.data.data);
    });
  }, [comments]);

  const deleteComment = (comment: any) => {
    const id = { _id: comment._id };

    swal({
      title: "¿Esta segur@?",
      text: "Una vez eliminado, no se podrá recuperar el comentario. 😵",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("¡Se ha eliminado con éxito su comentario! 😶", {
          icon: "success",
        });
        deleteComents(id).then((res) => {});
      } else {
        swal("Has cancelado la eliminación del comentario");
      }
    });
  };
  const onChange = (e: any) => {
    setComentario({
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitTest = (data: any, e: any) => {
    e.preventDefault();
    const NewComent = {
      owner: owner,
      text: comentario.comentario,
      section: section[toggleState].title,
    };

    createComent(NewComent).then((res) => {
      setComentario({ comentario: "" });
    });
  };

  if (section.length <= 0) {
    return <p>loading ...</p>;
  } else {
    return (
      <>
        <div className={styles.tabs__container}>
          {section.map((section: any, index: number) => (
            <Link
              to={""}
              key={section._id}
              onClick={() => toggleTab(index)}
              className={
                toggleState === index
                  ? `${styles.tab} ${styles.active}`
                  : styles.tab
              }
            >
              {section.title}
              <FontAwesomeIcon
                icon={faCommentDots}
                className={styles.icon}
                size="lg"
              />
            </Link>
          ))}
        </div>

        {section.map((section: any, index: number) => (
          <div
            className={
              toggleState === index
                ? styles.comments__container
                : `${styles.comments__container} ${styles.display__none}`
            }
          >
            {comments
              .filter((commentall: any) => commentall.section === section.title)
              .map((comment: any) => (
                <div key={comment._id} className={styles.comment}>
                  <p>{comment.text}</p>
                  <span>
                    {comment.owner}&nbsp;
                    {comment.creationdate}
                  </span>
                  <div
                    className={styles.containercomment}
                    style={{
                      display: comment.owner === owner ? "flex" : "none",
                    }}
                  >
                    <button
                      className={styles.botonborrar}
                      type="button"
                      onClick={() => deleteComment(comment)}
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className={styles.icon}
                        size="lg"
                      />
                    </button>
                  </div>
                </div>
              ))}

            <form
              className={styles.cajacomentarios}
              onSubmit={handleSubmit(onSubmitTest)}
            >
              <textarea
                placeholder="Digite su comentario"
                cols={60}
                rows={5}
                name="comentario"
                value={comentario.comentario}
                onChange={onChange}
              />
              <button className={styles.addbutton} type="submit">
                Comentar
              </button>
            </form>
          </div>
        ))}
      </>
    );
  }
}

export default BoxCommentComponent;
