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
import { faCirclePlus, faCommentDots } from "@fortawesome/free-solid-svg-icons";
type Tcomment = {
  owner: String | undefined;
  text: any;
  section: String;
};

function BoxCommentComponent() {
  const owner = Cookies.get("email");
  const [toggleState, setToggleState] = useState(0);
  const [section, setSection] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);

  const [comment, setComment] = useState<any>();
  const { handleSubmit, register } = useForm<any>();

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
    console.info(comment);
    deleteComents(comment);
    location.reload();
  };
  const onChange = (e: any) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
    console.log(comment.commentText);
  };

  const onSubmitTest = (data: any, e: any) => {
    e.preventDefault();

    console.log(section[toggleState].title);
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
              {section.title}{" "}
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
                  <div
                    style={{
                      display: comment.owner === owner ? "block" : "none",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => deleteComment(comment)}
                    >
                      Borrar
                    </button>
                  </div>
                </div>
              ))}

            <form onSubmit={handleSubmit(onSubmitTest)}>
              <textarea
                cols={60}
                rows={5}
                {...register("commentText")}
                value={comment}
                onChange={onChange}
              ></textarea>
              <button type="submit">
                {" "}
                Crear comentario{" "}
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className={styles.icon}
                  size="lg"
                />
              </button>
            </form>
          </div>
        ))}
      </>
    );
  }
}

export default BoxCommentComponent;
