import React from 'react';
import empty_task from "../../assets/empty_tasks.png";

function EmptyPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img src={empty_task} alt="No tasks available" className="max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto" />
    </div>
  );
}

export default EmptyPage;
