const Working = ({ mode }) => {
    const textMode = mode === 'dark' ? 'light' : 'dark';

    return (
        <div
            className={`flex-grow-1 d-flex justify-content-center align-items-center bg-${mode} text-${textMode}`}
        >
            <h1>Working on...</h1>
        </div>
    );
};

export default Working;
