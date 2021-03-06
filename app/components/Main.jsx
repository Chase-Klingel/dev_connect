import React from 'react';
import NotFound from './NotFound';
import Home from './Home';
import Category from './Category';
import WriteLesson from './WriteLesson';
import WriteQuestion from './WriteQuestion';
import ReadLesson from './ReadLesson';
import Profile from './Profile';
import { Match, Miss, Link, Redirect} from 'react-router';
import SignUp from './SignUp';
import SignIn from './SignIn';
import PublicProfile from './PublicProfile';

export default class Main extends React.Component {
  render() {
    return (
      <div className="row">
        <Match pattern="/" exactly render={
          () => <Home
                  upVote={this.props.upVote}
                  downVote={this.props.downVote}
                  lessons={this.props.lessons}
                  getLessons={this.props.getLessons}
                  wishes={this.props.wishes}
                  getWishList={this.props.getWishList}
                  favorites={this.props.favorites}
                  getFavorites={this.props.getFavorites}
                  isLoggedIn={this.props.isLoggedIn}
                />
        }/>

        <Match pattern="/signup" exactly render={() =>
          this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <SignUp authUser={this.props.authUser} />
          )
        }/>

        <Match pattern="/signin" exactly render={() =>
          this.props.isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <SignIn authUser={this.props.authUser} />
          )
        }/>

        <Match pattern="/profile" render={
          () => <Profile
                  userData={this.props.userData}
                  getUserData={this.props.getUserData}
                  favorites={this.props.favorites}
                  getFavorites={this.props.getFavorites}
                  myLessons={this.props.myLessons}
                  getMyLessons={this.props.getMyLessons}
                  incompleteLessons={this.props.incompleteLessons}
                  getIncompleteLessons={this.props.getIncompleteLessons}
                />
        }/>
        <Match pattern="/user/:id?" render={
          () => <PublicProfile
                  userData={this.props.userData}
                  getUserData={this.props.getUserData}
                  myLessons={this.props.myLessons}
                  getMyLessons={this.props.getMyLessons}
                  favorites={this.props.favorites}
                  getFavorites={this.props.getFavorites}
                />
        }/>
        <Match pattern="/category" render={
          () => <Category
                  lessons={this.props.lessons}
                  getLessons={this.props.getLessons}
                  favorites={this.props.favorites}
                  getFavorites={this.props.getFavorites}
                  isLoggedIn={this.props.isLoggedIn}
                />
        }/>
        <div id="background">
          <Match pattern="/write-lesson" render={
            () => <WriteLesson
                    getUserData={this.props.getUserData}
                    userData={this.props.userData}
                    publishedArticle={this.props.publishedArticle}
                    getPublished={this.props.getPublished}
                  />
          }/>

          <Match pattern="/question" exactly render={
            () => <WriteQuestion />
          }/>
        </div>

        <Match pattern="/lesson/:id?" render={
          () => <ReadLesson
                  lesson={this.props.lesson}
                  getLesson={this.props.getLesson}
          />
        }/>

        <Miss component={NotFound} />
      </div>
    );
  }
}
