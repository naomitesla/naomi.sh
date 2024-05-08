interface Props {
    trigger: boolean;
    setTrigger: (arg0: boolean) => void;
}

export default async function DestroyPanel(props: Props) {
    props.setTrigger(false);
}
