import { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { Dispatch, ReactElement, ReactNode } from 'react';
import {
  ImageProps,
  ImageSourcePropType,
  TextInput,
  TextInputProps,
} from 'react-native';
import { Image, Video } from 'react-native-image-crop-picker';
import { OnOrientationChange } from 'react-native-modal';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomSheetModalRef } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModalProvider/types';

declare global {
  // CommentList Array

  interface IItemRowType {
    title: string;
    desc: string;
    isLink?: boolean;
    style?: object;
  }

  interface ICompanionProfile {
    userData?: any;
    onCrossImagePress: () => void;
    onMutedPress: () => void;
    isMute: boolean;
    isOpenToWork: boolean;
    isDeleteOpenModal: boolean;
    isBlockOpenModal: () => void;
  }

  interface IHeaderProps {
    goBack?: () => void;
    heading?: string;
    style?: {};
    containerStyle?: {};
    isChat?: boolean;
    headingStyle?: {};
    position?: any;
    onPress?: () => void;
    isMute?: boolean;
    backBtnStyle?: {};
    headerTitleStyle?: {};
    arrowColorStyle?: {};
    muteHeadingStyle?: {};
    backTxtStyle?: {};
    iconStyle?: {};
    headerTxt?: {};
    avatar?: any;
    isAvatarUri?: boolean;
    isChatGroup?: boolean;
    heading2?: string;
    heading2Style?: {};
    headingViewStyle?: {};
  }

  interface IUserProfile {
    __v: number;
    _id: string;
    avatar: string;
    company: string;
    createdAt: string;
    email: string;
    facebook: string;
    firstName: string;
    instagram: string;
    isActive: boolean;
    isAllowPostsNotification: boolean;
    isAllowCommentsNotification: boolean;
    isAllowMentionNotification: boolean;
    isAllowLikesNotification: boolean;
    isAllowNotifications: boolean;
    isAllowNewFollowersNotification: boolean;
    isAllowGroupInvitationsNotification: boolean;
    isAllowJoiningNotification: boolean;
    isAllowDMNotification: boolean;
    isDeleted: boolean;
    job: string;
    lastName: string;
    linkedIn: string;
    location: string;
    tiktok: string;
    token: string;
    updatedAt: string;
    userName: string;
    workStatus: string;
  }

  interface IToken {
    token: string | undefined;
  }

  interface IUpdatedUserProfile {
    firstName: string;
    lastName: string;
    userName: string;
    job: string;
    company: string;
    location: string;
    workStatus: string; // Assuming workStatusFind() returns a string
    avatar: ImageOrVideo | undefined; // Assuming res?.data?.url can be undefined
    linkedIn: string;
    instagram: string;
    facebook: string;
    tiktok: string;
  }

  type WorkStatusType = 'OPEN TO WORK' | 'HIRING' | 'NONE';

  interface IWorkStatus {
    open: boolean;
    hiring: boolean;
    none: boolean;
  }

  interface IWorkCon {
    workStatus: {
      open: boolean;
      hiring: boolean;
      none: boolean;
    };
    txt: string;
    setWorkStatus: (value: IWorkStatus) => void;
    name: string;
    workConStyle: {
      width: string;
    };
  }

  interface IUpdatedUserProfile {
    firstName: string;
    lastName: string;
    userName: string;
    job: string;
    company: string;
    location: string;
    workStatus: string; // Assuming workStatusFind() returns a string
    avatar: ImageOrVideo | undefined; // Assuming res?.data?.url can be undefined
    linkedIn: string;
    instagram: string;
    facebook: string;
    tiktok: string;
  }

  type WorkStatusType = 'OPEN TO WORK' | 'HIRING' | 'NONE';

  interface IWorkStatus {
    open: boolean;
    hiring: boolean;
    none: boolean;
  }

  interface IWorkCon {
    workStatus: {
      open: boolean;
      hiring: boolean;
      none: boolean;
    };
    txt: string;
    setWorkStatus: (value: IWorkStatus) => void;
    name: string;
    workConStyle: {
      width: string;
    };
  }

  interface IItem {
    _id?: string;
    feed?: string;
    comment?: string;
    likeCount: number;
    commentCount: number;
    drafted: boolean;
    createdAt: string;
    updatedAt: string;
    liked: boolean;
    url: any;
    userId?: string;
    creator: {
      _id: string;
      firstName: string;
      lastName: string;
      userName: string;
      avatar: string;
      isDeleted: boolean;
      isActive: boolean;
    };
    isConnected: boolean;
    blockedMe?: boolean;
    blockedHim?: boolean;
  }
  //Input Interface
  interface Iinput {
    value: string;
    onChange: Dispatch<React.SetStateAction<string>>;
    onPress: () => void;
    isLoading: boolean;
  }

  interface IPosts {
    posts: Amity.Post;
    fetchPosts: (userId: string | undefined) => Promise<Amity.Unsubscriber>;
    userId: string | undefined;
  }

  interface IPost {
    data: Amity.InternalPost[];
    onNextPage: () => void;
    hasNextPage: boolean;
  }

  // postinput interface
  interface IPostInput {
    setScrollTo?: () => void;
    targetId?: {};
  }

  type ReactionOption = 'removeReaction' | 'addReaction';

  //AttachmentCard
  interface IattachmentCard {
    isProfile?: boolean;
    style?: object;
    titleContainer?: object;
    title?: string;
    isComapanion?: boolean;
    isDeleteOpenModal?: any;
    isBlockOpenModal?: () => void;
    isOpenToWork?: boolean;
    scrollStyle?: object;
    titleContainerText?: object;
    nameStyle?: object;
    emailStyle?: object;
    postionStyle?: object;
    txtCon?: object;
    breaklineStyle?: object;
    SkillConStyle?: object;
    skilltextStyle?: object;
    buttonName?: string;
    isChat?: boolean;
    isChatScreen?: boolean;
    isMessaging?: boolean;
    isProfileScreen?: boolean;
    data?: IUserProfile | undefined;
  }

  type MessageWithExtras = Amity.Message<'text'> & {
    image: string;
    text: string;
    isAttachment: boolean;
    isSend: boolean;
    isTime?: 'no' | 'yes';
  };

  type MessageType = {
    message: MessageWithExtras;
    isGroup: boolean;
    showModal: boolean;
    setShowModal: (data: any) => void;
    data: ImageType[];
    allMessageUrls: string[];
  };

  interface VideoPreviewModalState {
    showModal: boolean;
    data: any[];
    urlIndex: number;
  }

  interface IVideoPreviewModal {
    showModal: boolean;
    setShowModal: () => void;
    data: string[];
    urlIndex: number;
  }

  //DeleteChatModal
  interface IDeleChatModal {
    onDeleteChat: () => void;
    onCancel: () => void;
    onCrossImagePress: () => void;
    onMutedPress: () => void;
    style?: Object;
    isMessage?: boolean;
    name;
    name2;
    isMute;
  }

  //Search Input Interface
  interface ISearchInput {
    value?: IntrinsicClassAttributes<TextInput>;
    onChangeText?: Dispatch<React.SetStateAction<string>>;
    onMicrophonePress?: () => void;
    isMicroPhone?: boolean;
    style?: object;
    isArrow: boolean;
    onFocus: () => void;
    OnArrowPress: () => void;
    isFocus: boolean;
    mainCon?: object;
    isMore?: boolean;
  }
  interface IFilterSpeakers {}

  interface ISpeakerProfileModal {
    onCancel?: () => void;
    item?: any;
  }

  //ContectCard Interface
  interface IContactCard {
    avatar: any;
    key?: number;
    name: string;
    position: string;
    email: string;
    buttonName: string;
    onPress?: () => void;
    isChat?: boolean;
    style?: object;
    isProfile?: boolean;
    isComapanion?: boolean;
    searchValue?: string;
    length?: number;
    index?: number;
    nameStyle?: object;
    emailStyle?: object;
    postionStyle?: object;
    txtCon?: object;
    userNameRow?: any;
    isFound?: any;
    isProfileScreen?: any;
    isDeleted?: any;
    isMessaging?: any;
    isContact?: any;
    breaklineStyle?: any;
    workStatus: string | undefined;
    username: string | undefined;
  }

  //higlight
  interface IhighlightText {
    text: string;
    search: string;
    styleSearch?: object;
    styleNormal?: object;
    mainStyle?: object;
    numberoflines?: number;
    isFound?: boolean;
  }

  //Header Interface
  interface HeaderPropsIHeader {
    heading: string;
    style?: object;
    containerStyle: object;
    isChat?: boolean;
    headingStyle?: object;
    position?: string;
    onPress?: () => void;
    isMute?: boolean;
    backBtnStyle?: object;
    HeadingViewStyle?: object;
    headerTitleStyle?: object;
    arrowColorStyle?: object;
    backTxtStyle?: object;
    iconStyle?: object;
    headerTxt?: object;
    isSettings?: boolean;
    avatar?: any;
    isChatGroup?: boolean;
  }

  interface IMoreHeader {
    notificationCount?: any;
    onClick?: () => void;
    unreadCount?: any;
  }

  //Feed Header Interface
  interface IFeedHeader {
    userData?: any;
    home?: boolean;
    sheetIndex?: number;
    headerTitle: string;
    headerTime: string;
    handleSheetChanges: (index: number) => void;
  }
  // Feed Component Interface

  interface IFeedComponent {
    style?: {};
    data: Amity.Post;
    getData: () => Promise<Amity.Unsubscriber>;
    userId: string | undefined;
  }

  //Attachment Button interface
  interface IAttachmentButton {
    isSelected?: boolean;
    onPress?: () => void;
    title: string;
    style?: object;
    isdisabled: boolean;
    textStyle?: object;
    customStyle?: object;
    plusTextStyle?: object;
  }
  //SendMessageCard interface
  type SelectedItemKeys = 'bs' | 'tw' | 'fc' | 'ln' | 'insta';

  type SelectedItemTypes = {
    [key in SelectedItemKeys]: boolean;
  };

  interface ISendMessageCardButton {
    onChangeText?: Dispatch<React.SetStateAction<string>>;
    value?: IntrinsicClassAttributes<TextInput>;
    containerStyle?: object;
    url?: string;
    imagess: Image[];
    videos: Video[];
    docs: Video[];
    selectedItems?: SelectedItemTypes;
    isInputDisabled?: boolean;
    channelId: string;
    channelMembers: Amity.Membership<'channel'>[];
    onHit?: () => void;
    onGifPress?: () => void;
    onPressOut?: () => void;
    onPressIn?: () => void;
    pickPicture?: () => void;
    setIsInputFocused: Dispatch<React.SetStateAction<boolean>>;
    bottomSheetModalRef: RefObject<BottomSheetModalMethods>;
  }

  interface IChatAttachmentBottomSheet {
    bottomSheetModalRef: RefObject<BottomSheetModalMethods>;
    pickPicture: () => void;
    selectVideo: () => void;
    pickDocument: () => void;
  }

  //profile Modal interface
  interface IProfileModal {
    profileData: {
      workStatus: string;
      avatar: string;
      firstName: string;
      lastName: string;
      userName: string;
      company: string;
      job: string;
      linkedIn: string;
      skills: [];
      _id: string;
    };
    setProfileData: Dispatch<React.SetStateAction<any>>;
    isConnected: boolean;
    isBlocked?: boolean;
    checkSection: string;
    id: string | undefined;
  }

  // PostModal interface
  interface IPostModal {
    closeTitle: string;
    title: string;
    multi?: boolean;
    showModal?: boolean;
    setShowModal?: any;
    onPress?: () => void;
    feed?: boolean;
    loading?: boolean;
    selectPost?: Dispatch<React.SetStateAction<any>>;
  }

  // Reporting Modal
  interface IReportingModal {
    showReportingModal: boolean;
    setShowReportingModal: Dispatch<SetStateAction<boolean>>;
    post: Amity.Post;
    commentId: string;
  }

  // SortModal interface
  interface ISortModal {
    closeTitle: string;
    title: string;
    data: array[];
    color?: boolean;
    showModal?: boolean;
    setShowModal?: any;
    feed?: boolean;
  }

  // FilterModal interface
  interface IFilterModal {
    closeTitle: string;
    title: string;
    showModal?: boolean;
    setShowModal?: Dispatch<React.SetStateAction<boolean>>;
    filterHandle: (item: string[]) => void;
    resetFilterHandle: () => void;
  }

  //Skill Row type
  interface ISkillRowType {
    style?: object;
    items: Array;
    isDouble: boolean;
    itemsConStyle?: object;
    title: string;
  }

  //profile Modal interface
  interface ICustomButton {
    onPress: () => void;
    text: string;
    border?: number;
    bgColor?: string;
    borderColor?: string;
    btnWidth?: string;
    isBlocked?: boolean;
  }

  //Carousel Card interface
  interface ICarouselCard {
    carouselItems: Array;
    setActiveSlide: Dispatch<React.SetStateAction<number>>;
    activeSlide: number;
  }

  // Network Card interface
  interface INetworkCard {
    item?: any;
    onBlock?: () => void;
    onDelete: () => void;
    onClick?: () => void;
    avatar?: any;
    name: string;
    position?: string;
    desc: string;
    time: string;
    index: number;
    onPress?: () => void;
    key?: number;
    serachTxt: string;
    searchValue: string;
    onCardPress?: () => void;
    isRead: boolean;
    isDeleted?: boolean;
    isActive?: boolean;
  }
  // Comment Card
  interface IPostItem {
    onPress?: () => void;
    item: IItem;
    showCommentInput?: () => void;
    openKeyboard?: boolean;
    removePost?: (id: string | undefined) => void;
    darkMode?: boolean;
  }
  // All Comment Cards
  interface IAllCommentsCard extends IPostItem {}

  // MessageBlock interface
  interface IMessageBlock {
    item: Object;
    time?: string;
    timereadleft?: string;
    timereadright?: string;
    style: object;
    isRecieve?: boolean;
    displayUserName: boolean;
  }
  //Custom Text interface
  interface ICustomText {
    children: ReactNode;
    style: object;
    numberOfLines?: number;
  }
  //Heading interface
  interface IHeading extends ICustomText {}

  interface IChatListProps {
    chatId: string;
    chatDetails: any;
    chatMemberNumber: number;
    unReadMessage: number;
    messageDate: string;
    channelType: 'conversation' | 'broadcast' | 'live' | 'community' | '';
    avatarFileId: string | undefined;
  }

  type FileDocument = {
    path: string;
    mime: string | null;
    filename: string | null;
    size: number | null;
  };

  // NetworkList Array
  interface INetworkListArr {
    name: string;
    position: string;
    id?: number;
  }
  // eventsData Array
  interface IEventsData {
    [key: string]: object[{ startTime: string; endTime: string }];
  }

  //Add Contact

  interface IAddContact {
    title: string;
    text1: string;
    text2: string;
    name: string;
    btnName: string;
    onPress: () => void;
    textStyle?: {};
    btnStyle?: {};
    isAdded?: boolean;
    avatar?: any;
  }

  //FeedStackParams
  type FeedStackParamList = {
    HomeScreen: undefined;
    AccountSettings: undefined;
    profile: {
      postedUserId?: string;
      postedUserName?: string;
    };
    userLists: {
      userIds: string[];
    };
    editProfile: {
      userProfileData: IUserProfile;
    };
    notiSetting: undefined;
    help: undefined;
    faq: undefined;
    SuccessFeed: undefined;
    mapHome: {
      active?: boolean;
      isCampus?: boolean;
    };
    speakers: undefined;
    notifications: undefined;
  };

  type MoreStackParamList = {
    MoreScreen: undefined;
    feedback: undefined;
    profile: FeedStackParamList['profile'];
    resume: undefined;
    notifications: undefined;
    speakers: undefined;
  };

  type ScheduleStackParamList = {
    ScheduleScreen: undefined;
  };

  interface IPushNotificationSettings {
    title: string;
    value: boolean;
    onValueChange: (val: boolean) => void;
  }

  interface IPushNotificationData {
    [x: string]: boolean;
  }

  interface IPushNotificationFeatures {
    isAllowCommentsNotification: boolean;
    isAllowMentionNotification: boolean;
    isAllowLikesNotification: boolean;
    isAllowNotifications: boolean;
    isAllowNewFollowersNotification: boolean;
    isAllowGroupInvitationsNotification: boolean;
    isAllowJoiningNotification: boolean;
    isAllowDMNotification: boolean;
  }

  interface IPushNotificationOptions {
    text: string | undefined;
    value: boolean | undefined;
    option: string | undefined;
    style?: object;
  }

  interface IPushNotificationGroupOptions {
    text: string;
    text2: string;
    text3?: string | undefined;
    value: boolean;
    value2: boolean;
    value3?: boolean | undefined;
    option: string;
    option2: string;
    option3?: string | undefined;
  }

  interface IPushNotificationBody {
    [x: string]: boolean;
  }

  type NotificationStackParamList = {
    NotificationScreen: undefined;
    PushNotification: undefined;
  };

  interface INotification {
    __v: number;
    _id: string;
    createdAt: string;
    isRead: boolean;
    notification: string;
    updatedAt: string;
    userId: string;
  }

  interface INotificationStatus {
    status: boolean;
  }

  type EventsStackParamList = {
    EventsScreen: undefined;
  };

  type CommunityStackParamList = {
    CommunityScreen: undefined;
    community: undefined;
    CommunityPage: undefined;
    EditCommunity: undefined;
    FollowersList: undefined;
    SelectedCommunity: undefined;
  };

  type ISpeakers = {};

  interface IAddBanner {}

  //profile screen

  interface IProfile {
    postedUserId?: string;
  }

  interface NotificationsSetting {}

  interface IMailModal {
    onCancel: () => void;
    onMailClick: () => void;
    onGmailClick: () => void;
  }
  interface IOTP {
    index: number;
  }

  type MoreStackParamList = {};

  type AuthNavigatorParamList = {
    welcome: undefined;
    login: undefined;
    register: undefined;
    ResetPassword: {
      isAlternate: boolean;
      email: string;
    };
    fillinfo1: {
      payload: any;
      email: string;
      password: string;
    };
    fillinfo2: {
      image?: string;
      payload: any;
      email: string;
      password: string;
    };
    forgotscreen: undefined;
    alternativeemail: undefined;
    ChangeEmailPrimary: {
      screen: string;
      email: any;
    };
    Successfull: undefined;
    passwordRecovery: {
      screen: string;
      isMailDeactivate?: boolean;
      email?: string;
      isAlternate?: boolean;
    };
    update: undefined;
  };

  type DrawerNavigatorParamList = {
    AppBottomStack: NavigatorScreenParams<AppNavigatorParamList>;
    editProfile: undefined;
    ChangeCredentials: undefined;
    SuccessfullMessage: undefined;
    update: undefined;
  };

  type AppNavigatorParamList = {
    HomeNavigator: NavigatorScreenParams<BottomTabsParamsList>;
    chat: {
      roomId: Amity.Channel['defaultSubChannelId'];
      userData?: Amity.User['metadata'];
    };
    GroupInfo: any;
    VerifyYourTicket: any;
    FoundTicket: any;
    WebView: any;
    PostDetailScreen: {
      item: IItem;
      isCommunity?: boolean;
      isJoined?: boolean;
      communityId?: string;
    };
    FollowersList: any;
  };

  type BottomTabsParamsList = {
    Feed: NavigatorScreenParams<FeedStackParamList>;
    Communities: any;
    Messaging: NavigatorScreenParams<NetworkStackParamList>;
    Notifications: any;
    Events: any;
    editProfile: {
      userProfileData: IUserProfile;
    };
    openDrawer: () => void;
  };

  //NetworkStackParams
  type NetworkStackParamList = {
    mainNetworkScreen: undefined;
  };

  type MapStackParamList = {
    mapHome: {
      active?: boolean;
      isCampus?: boolean;
    };
  };

  interface IFillInfo {}

  interface IImagePickerModal {
    chooseFromGallery: () => void;
    TakePhoto: () => void;
    onCancel: () => void;
    show: boolean;
  }

  interface IFullScreenImageModal {
    onCancel: () => void;
    show: boolean;
    url: string | null | undefined;
    type: string;
    thumbnailUrl: string;
  }

  interface IFullScreenModalType {
    modalShow: boolean;
    type: string;
  }

  interface ITopTab {
    onPress: () => void;
  }

  type AuthStackScreenProps<Screen extends keyof AuthNavigatorParamList> =
    NativeStackScreenProps<AuthNavigatorParamList, Screen>;

  type DrawerNavigatorScreenProps<
    Screen extends keyof DrawerNavigatorParamList
  > = DrawerScreenProps<DrawerNavigatorParamList, Screen>;

  type AppStackScreenProps<Screen extends keyof AppNavigatorParamList> =
    NativeStackScreenProps<AppNavigatorParamList, Screen>;

  type BotomTabScreenProps<Screen extends keyof BottomTabsParamsList> =
    BottomTabScreenProps<BottomTabsParamsList, Screen>;

  type FeedStackScreenProps<Screen extends keyof FeedStackParamList> =
    NativeStackScreenProps<FeedStackParamList, Screen>;

  type NetworkStackScreenProps<Screen extends keyof NetworkStackParamList> =
    NativeStackScreenProps<NetworkStackParamList, Screen>;

  type NotificationStackScreenProps<
    Screen extends keyof NotificationStackParamList
  > = NativeStackScreenProps<NotificationStackParamList, Screen>;

  type EventsStackScreenProps<Screen extends keyof EventsStackParamList> =
    NativeStackScreenProps<EventsStackParamList, Screen>;

  type MapStackScreenProps<Screen extends keyof MapStackParamList> =
    NativeStackScreenProps<MapStackParamList, Screen>;

  interface IImageData {
    creationDate: string;
    cropRect: {
      height: number;
      width: number;
      x: number;
      y: number;
    };
    data: any; // Replace 'any' with the appropriate type if you have more information about the data
    duration: any; // Replace 'any' with the appropriate type if you have more information about the duration
    exif: any; // Replace 'any' with the appropriate type if you have more information about the exif
    filename: string;
    height: number;
    localIdentifier: string;
    mime: string;
    modificationDate: any; // Replace 'any' with the appropriate type if you have more information about the modificationDate
    path: string;
    size: number;
    sourceURL: string;
    width: number;
  }

  type ChannelWithUser = Amity.Channel<any> & {
    userDetails?: Amity.User['metadata'];
  };
  type UserWithChannelId = Amity.User & {
    defaultSubChannelId?: Amity.Channel<'conversation'>['defaultSubChannelId'];
  };

  type provider = 'appStore' | 'playStore';

  interface IAppUpdate {
    isNeeded: boolean;
    currentVersion: string;
    latestVersion: string;
    storeUrl: string;
  }
}
