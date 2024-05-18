import React from "react";
import classes from "./Post.module.css";

const Post = () => {
    const user = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    };
    user.photoUrl = `https://api.dicebear.com/8.x/pixel-art/svg`;

    const comments = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
            "postId": 1,
            "id": 4,
            "name": "alias odio sit",
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
            "postId": 1,
            "id": 5,
            "name": "vero eaque aliquid doloribus et culpa",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        }
    ]

    const post = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };

    return (
        <section className={classes.container}>
            <div className={classes.info}>
                <div className={classes.author}>
                    <img
                        className={classes.author_avatar}
                        src={user.photoUrl}
                        alt="Author"
                    />
                    <div className={classes.author_info}>
                        <div className={classes.author_name}>
                            {user.name}
                        </div>
                        <div className={classes.author_username}>
                            @{user.username}
                        </div>
                    </div>
                </div>

                <div className={classes.options}>
                    <button className={classes.btn_delete}>
                        Delete
                    </button>
                </div>
            </div>

            <article className={classes.content}>
                <h3 className={classes.title}>
                    {post.title}
                </h3>
                <p className={classes.body}>
                    {post.body}
                </p>
            </article>

            <div className={classes.statistic}>
                <div className={classes.statistic_commentsCount}>
                    {comments.length} Comments
                </div>
            </div>

            <div className={classes.actions}>
                <button className={classes.btn_comment}>
                    Comment
                </button>
            </div>
        </section>
    );
};

export default Post;
