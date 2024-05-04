type Props = {
    // label: string;
    children: string
}

export const Text = ({children = "hello"}: Props) => {
    return <p>{children}</p>
}