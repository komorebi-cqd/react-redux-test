
// Theme context，默认的 theme 是 “light” 值
const ThemeContext = React.createContext('light');

// 用户登录 context
const UserContext = React.createContext({
    name: 'Guest',
});


//使用默认值则不要使用Provider(ThemeContext.Provider)
export default class Context extends React.Component {
    render() {
        const { signedInUser, theme } = this.props;

        // 提供初始 context 值的 App 组件
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}


function Sidebar() {
    return (
        <div>
            Sidebar
        </div>
    )
}

function Layout() {
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    );
}

// 一个组件可能会消费多个 context
function Content() {
    return (
        <div>
            Content
            <ThemeContext.Consumer>
                {theme => (
                    <UserContext.Consumer>
                        {user => (
                            <ProfilePage user={user} theme={theme} />
                        )}
                    </UserContext.Consumer>
                )}
            </ThemeContext.Consumer>
        </div>
    );
}


function ProfilePage(props) {
    console.log(props);
    return (
        <div>
            <ThemeContext.Consumer>
                {theme => (
                    <UserContext.Consumer>
                        {user => (
                            <div>
                                上下文USER：{user}<br />
                                上下文Theme：{theme}
                            </div>
                        )}
                    </UserContext.Consumer>
                )}
            </ThemeContext.Consumer>

        </div>
    )
}