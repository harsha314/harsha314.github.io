const PageMode = ({ mode, setMode }) => {
    const switchMode = (e) => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    };
    return (
        <div
            className={`d-flex flex-row-reverse bg-${mode} text-${
                mode === 'dark' ? 'light' : 'dark'
            }`}
        >
            <div className="form-check form-switch mx-1">
                <input
                    type="checkbox"
                    className="form-check-input"
                    onClick={switchMode}
                    role="switch"
                />
                <label className="form-check-label h6">Dark Mode</label>
            </div>
        </div>
    );
};

export default PageMode;
