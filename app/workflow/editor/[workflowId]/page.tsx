import React from 'react'

function page({params}: {params: {workflowId: string}}) {
    const {workflowId} = params;
    const userId = "YASHGAUR";

    if(!userId) return <div>unauthenticated</div>;
    
    const workflow = {};

    if(!workflow) {
        return <div> Workflow not found</div>;
    }

    return (
        <pre className="h-screen">{JSON.stringify(workflow, null, 4)}</pre>
    );
}

export default page