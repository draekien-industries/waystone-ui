import { Button } from "@waystone/core";
import { useIsomorphicLayoutEffect } from "@waystone/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("waystone docs page");
  }, []);
  return (
    <div>
      <h1>waystone Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
