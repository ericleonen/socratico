type ShadowType = {
    close: () => void,
    children: React.ReactNode
}

export default function Shadow({ close, children }: ShadowType) {
    return (<>
            <div
                onClick={close}
                className="absolute top-0 left-0 h-screen w-screen bg-ai-theme-translucent z-40"
            />
            {children}
    </>);
}