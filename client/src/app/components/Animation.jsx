'use client'

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Animation() {
  const [leftAnimate, setLeftAnimate] = useState(false);
  const [bottomAnimate, setBottomAnimate] = useState(false);

  // First ref for the first element
  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0,
  });

  // Second ref for the second element
  const { ref: bottomRef, inView: bottomInView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (leftInView) setLeftAnimate(true);
  }, [leftInView]);

  useEffect(() => {
    if (bottomInView) setBottomAnimate(true);
  }, [bottomInView]);

  return (
    <div className="overflow-hidden">
      <div
        ref={leftRef}
        className={`text-yellow-400 py-32 transition-all duration-1000 ${leftAnimate ? 'translate-x-0' : 'translate-x-full'}`}
      >
        Animation 1
      </div>
      <div
        ref={bottomRef}
        className={`text-yellow-400 py-32 transition-all duration-1000 ${bottomAnimate ? 'translate-y-0' : 'translate-y-full'}`}
      >
        Animation 2
      </div>
    </div>
  );
}

export default Animation;
