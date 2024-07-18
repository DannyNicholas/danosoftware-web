import { Container, Divider, Header } from "semantic-ui-react"

const Contact = () =>
(
    <Container text>
        <Header as='h2'>Contact Me</Header>
        <Divider />
        <p>
            If you want to know more about my portraits or would like to commission
            a drawing please contact me. I would love to hear from you.
        </p>
        <Header as='h3' textAlign='center'>
            Email:&nbsp;
            <a target='_blank' rel='noopener noreferrer' href='mailto:melnicholas72%40gmail.com?Subject=Portrait%20Enquiry'>
                melnicholas72@gmail.com
            </a>
        </Header>
        <Header as='h3' textAlign='center'>
            Phone:&nbsp;
            <a target='_blank' rel='noopener noreferrer' href='tel:+441225862785'>
                01225 862785
            </a>
        </Header>
    </Container>
)

export default Contact
