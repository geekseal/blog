import { WidthResizeTransition } from "@/components/common/WidthResizeTransition";
import { mdxComponents } from "@/components/mdx-components";
import CS01 from "@/contents/CS/cs01.mdx";

const Content = () => {
  return (
    <WidthResizeTransition>
      <section className="grid grid-cols-[minmax(96px,_1fr)_minmax(auto,_708px)_minmax(96px,_1fr)] p-[80px_0_20vh]">
        <div className="col-start-2">
          <CS01 components={mdxComponents} />
        </div>
      </section>
    </WidthResizeTransition>
  );
};

export default Content;
