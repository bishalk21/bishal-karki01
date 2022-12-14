import React, { useContext } from "react";
import Swiper from "swiper";
import { themeContext } from "../../extra/Toggle/Context";
import "./blog.scss";

export const BlogPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div class="wrapper">
      <div class="img1">
        <div class="round"> </div> {/* <!-- hero section --> */}{" "}
        <div class="hero2">
          <h1> I am Bishal </h1> <hr />
          <div class="hero-text"> Hi I love coding..... </div>{" "}
        </div>{" "}
        <span class="down-hero"> & gt; & gt; </span>{" "}
      </div>{" "}
      {/* <!-- first paragraph --> */}{" "}
      <section class="sec1">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellendus
          quis placeat eum!Voluptate aspernatur nostrum voluptatum, repellat
          itaque quae consequatur doloribus harum commodi blanditiis esse et,
          autem nulla voluptas!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi, illum
          eos quia dolor aut harum accusantium enim placeat aspernatur eum est
          iure eligendi perferendis dignissimos suscipit atque minus!
          Consequuntur, aliquam.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse excepturi
          eligendi, nostrum perferendis, fugit, est ratione voluptatibus
          provident veniam minus tempora inventore molestias dolore aut a ut
          fuga laborum nihil ?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga enim iure
          vero blanditiis ab laboriosam debitis molestiae ducimus.Fuga
          architecto velit eius asperiores cupiditate est!At incidunt a
          assumenda dolorum ? lorem ipsum dolor sit amet{" "}
        </p>{" "}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat
          voluptatibus obcaecati harum rem, voluptas quos dolores, odio sequi
          minus placeat quas explicabo vero distinctio nihil labore neque magnam
          laboriosam amet.{" "}
        </p>{" "}
      </section>{" "}
      {/* <!-- section image --> */}{" "}
      <div class="img2">
        <span class="title"> Parrallax </span>{" "}
      </div>{" "}
      {/* <!-- section paragraph --> */}{" "}
      <section class="sec1">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellendus
          quis placeat eum!Voluptate aspernatur nostrum voluptatum, repellat
          itaque quae consequatur doloribus harum commodi blanditiis esse et,
          autem nulla voluptas!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi, illum
          eos quia dolor aut harum accusantium enim placeat aspernatur eum est
          iure eligendi perferendis dignissimos suscipit atque minus!
          Consequuntur, aliquam.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse excepturi
          eligendi, nostrum perferendis, fugit, est ratione voluptatibus
          provident veniam minus tempora inventore molestias dolore aut a ut
          fuga laborum nihil ?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga enim iure
          vero blanditiis ab laboriosam debitis molestiae ducimus.Fuga
          architecto velit eius asperiores cupiditate est!At incidunt a
          assumenda dolorum ? lorem ipsum dolor sit amet{" "}
        </p>{" "}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat
          voluptatibus obcaecati harum rem, voluptas quos dolores, odio sequi
          minus placeat quas explicabo vero distinctio nihil labore neque magnam
          laboriosam amet.{" "}
        </p>{" "}
      </section>
      {/* <!-- third image --> */}{" "}
      <div class="img3">
        <span class="title"> Everest </span>{" "}
      </div>{" "}
      {/* <!-- third paragraph --> */}{" "}
      <section class="sec1">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellendus
          quis placeat eum!Voluptate aspernatur nostrum voluptatum, repellat
          itaque quae consequatur doloribus harum commodi blanditiis esse et,
          autem nulla voluptas!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi, illum
          eos quia dolor aut harum accusantium enim placeat aspernatur eum est
          iure eligendi perferendis dignissimos suscipit atque minus!
          Consequuntur, aliquam.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse excepturi
          eligendi, nostrum perferendis, fugit, est ratione voluptatibus
          provident veniam minus tempora inventore molestias dolore aut a ut
          fuga laborum nihil ?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga enim iure
          vero blanditiis ab laboriosam debitis molestiae ducimus.Fuga
          architecto velit eius asperiores cupiditate est!At incidunt a
          assumenda dolorum ? lorem ipsum dolor sit amet{" "}
        </p>{" "}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat
          voluptatibus obcaecati harum rem, voluptas quos dolores, odio sequi
          minus placeat quas explicabo vero distinctio nihil labore neque magnam
          laboriosam amet.{" "}
        </p>{" "}
      </section>{" "}
      {/* <!-- fourth image --> */}{" "}
      <div class="img4">
        <span class="title"> Parrallax </span>{" "}
      </div>{" "}
      {/* <!-- focurth paragraph --> */}{" "}
      <section class="sec1">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellendus
          quis placeat eum!Voluptate aspernatur nostrum voluptatum, repellat
          itaque quae consequatur doloribus harum commodi blanditiis esse et,
          autem nulla voluptas!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi, illum
          eos quia dolor aut harum accusantium enim placeat aspernatur eum est
          iure eligendi perferendis dignissimos suscipit atque minus!
          Consequuntur, aliquam.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse excepturi
          eligendi, nostrum perferendis, fugit, est ratione voluptatibus
          provident veniam minus tempora inventore molestias dolore aut a ut
          fuga laborum nihil ?
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga enim iure
          vero blanditiis ab laboriosam debitis molestiae ducimus.Fuga
          architecto velit eius asperiores cupiditate est!At incidunt a
          assumenda dolorum ? lorem ipsum dolor sit amet{" "}
        </p>{" "}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat
          voluptatibus obcaecati harum rem, voluptas quos dolores, odio sequi
          minus placeat quas explicabo vero distinctio nihil labore neque magnam
          laboriosam amet.{" "}
        </p>{" "}
      </section>{" "}
    </div>
  );
};
