import React from "react";

const TemplateBlog = () => {
  return (
    <div className="min-h-[60vh]">
      <div className="flex gap-4">
        <img
          src="/template_bg.jpg"
          alt="template bg"
          className="border-8 h-[40vh]"
        />
        <div className="flex flex-col justify-around">
          <div>
            <h1 className="text-2xl">once again, Hii there !!</h1>
            <br />
            <h1>
              this is template blog which basically tells how my future blog's
              formatting will look like and i can test out my new designs over
              here too.
            </h1>
          </div>

          <div className="flex items-center">
            <h3 className="text-2xl">TAGS :</h3>
            <span className="border-2 w-fit flex items-center border-green-700 text-green-700 p-2 rounded mx-2">
              <img
                className="inline-block px-2 "
                src="/icons/Shield_Soul.webp"
                alt=""
              />
              <h3 className="inline-block ">TEMPLATE</h3>
            </span>
            <span className="border-2  w-fit flex items-center border-yellow-400 text-yellow-400 p-2 rounded mx-2">
              {" "}
              <img
                className="inline-block px-2 "
                src="/icons/Orange_Attack_Soul.webp"
                alt=""
              />
              <h3 className="inline-block">STYLING</h3>
            </span>
          </div>
        </div>
      </div>

      <div>
        <br />
        <hr />
        <h1 className="my-2 text-2xl">Heading 1</h1>
        <h2 className="my-2 text-xl">Heading 2</h2>
        <h3 className="my-2 text-lg">Heading 3</h3>
        <h4 className="my-2 text-md">Heading 4</h4>
        <h5 className="my-2 text-sm">Heading 6</h5>
        <h6 className="my-2 text-xs">Heading 6</h6>

        <br />

        <h3 className="my-2 text-lg">Unordered List </h3>
        <ol className="list-disc pl-6">
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
        </ol>

        <br />

        <h3 className="my-2 text-lg">Ordered List </h3>
        <ol className="list-decimal pl-12">
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
        </ol>

        <br />

        <p className="tracking-wide leading-72">

            
          a very normal paragraph to test out the styling on how my usual yappy
          paragraphs will look like in future blogs , hehe please endure them.
          uh still the yap is a little less so let me think what can i yap about
          over here, you know the winters are coming now and i writing this
          while freezing in midnight even though i have alot of academic tasks
          to complete but anyways, i think i got enough yap now.
        </p>

        <br />
        <hr />
      </div>
    </div>
  );
};

export default TemplateBlog;
