import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async () => {
    try {
        const data = await resend.emails.send({
            from: 'Marina <contact@marinacristina.com>',
            to: ['iriciucmarina@yahoo.com'],
            subject: 'Hello world',
            html: '<strong>It works!</strong>',
        });

        return data;
    } catch (error) {
        return {error};
    }
});
