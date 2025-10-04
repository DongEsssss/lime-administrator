import { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Chip,
    Container,
    Button
} from '@mui/material';
import {
    People as PeopleIcon,
    Article as ArticleIcon,
    Comment as CommentIcon,
    TrendingUp as TrendingUpIcon,
    Visibility as VisibilityIcon,
    Schedule as ScheduleIcon,
    EmojiEvents as TrophyIcon
} from '@mui/icons-material';
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip, Cell } from 'recharts';

import './../../style/dashboard.scss';


interface Post {
    id: number;
    title: string;
    views: number;
    comments: number;
    date: string;
    author: string;
}

interface Stats {
    totalUsers: number;
    totalPosts: number;
    totalComments: number;
    todayVisits: number;
}

const Dashboard = () => {
    const [stats] = useState<Stats>({
        totalUsers: 1247,
        totalPosts: 89,
        totalComments: 456,
        todayVisits: 342
    });

    const [trafficData] = useState([
        { name: '신규 방문자', value: 156, color: '#1976d2' },
        { name: '재방문자', value: 186, color: '#2e7d32' },
        { name: '모바일', value: 203, color: '#ed6c02' },
        { name: '데스크톱', value: 139, color: '#9c27b0' }
    ]);

    const [popularPosts] = useState<Post[]>([
        { id: 1, title: '리메 서비스 오픈 안내', views: 1580, comments: 45, date: '2025-10-01', author: '관리자' },
        { id: 2, title: '10월 이벤트 당첨자 발표', views: 1234, comments: 67, date: '2025-10-02', author: '관리자' },
        { id: 3, title: '신규 기능 업데이트 소식', views: 987, comments: 32, date: '2025-09-30', author: '관리자' },
        { id: 4, title: '사용자 가이드 및 FAQ', views: 856, comments: 28, date: '2025-09-28', author: '관리자' },
        { id: 5, title: '커뮤니티 운영 정책 안내', views: 743, comments: 19, date: '2025-09-25', author: '관리자' }
    ]);

    const [recentPosts] = useState<Post[]>([
        { id: 6, title: '10월 3일 공지사항', views: 156, comments: 8, date: '2025-10-03', author: '관리자' },
        { id: 7, title: '시스템 점검 안내', views: 234, comments: 12, date: '2025-10-02', author: '관리자' },
        { id: 8, title: '신규 카테고리 추가 예정', views: 189, comments: 15, date: '2025-10-02', author: '관리자' },
        { id: 9, title: '이용자 설문조사 참여 부탁', views: 267, comments: 21, date: '2025-10-01', author: '관리자' },
        { id: 10, title: '9월 월간 리포트', views: 445, comments: 34, date: '2025-10-01', author: '관리자' }
    ]);

    const StatCard = ({ icon: Icon, title, value, color, bgcolor }: {
        icon: any,
        title: string,
        value: number,
        color: string,
        bgcolor: string
    }) => (
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography color="text.secondary" variant="body2" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="h4" fontWeight="bold">
                            {value.toLocaleString()}
                        </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: bgcolor, width: 56, height: 56 }}>
                        <Icon sx={{ color: color, fontSize: 32 }} />
                    </Avatar>
                </Box>
            </CardContent>
        </Card>
    );

    const getRankIcon = (index: number) => {
        const colors = ['#FFD700', '#C0C0C0', '#CD7F32'];
        if (index < 3) {
            return (
                <Avatar sx={{ bgcolor: colors[index], width: 32, height: 32 }}>
                    <TrophyIcon sx={{ fontSize: 20, color: 'white' }} />
                </Avatar>
            );
        }
        return (
            <Avatar sx={{ bgcolor: '#E0E0E0', width: 32, height: 32 }}>
                <Typography variant="body2" fontWeight="bold">
                    {index + 1}
                </Typography>
            </Avatar>
        );
    };

    //PieChart info Popper
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
            <Container maxWidth="xl">
                {/* 헤더 */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        LIME 관리자 대시보드
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        전체 통계 및 활동 현황을 확인하세요
                    </Typography>
                </Box>

                {/* 통계 카드 */}
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 3, mb: 4 }}>
                    <StatCard
                        icon={PeopleIcon}
                        title="전체 사용자"
                        value={stats.totalUsers}
                        color="#fff"
                        bgcolor="#1976d2"
                    />
                    <StatCard
                        icon={ArticleIcon}
                        title="전체 게시글"
                        value={stats.totalPosts}
                        color="#fff"
                        bgcolor="#2e7d32"
                    />
                    <StatCard
                        icon={CommentIcon}
                        title="전체 댓글"
                        value={stats.totalComments}
                        color="#fff"
                        bgcolor="#9c27b0"
                    />
                    <StatCard
                        icon={TrendingUpIcon}
                        title="오늘 방문자"
                        value={stats.todayVisits}
                        color="#fff"
                        bgcolor="blue"
                    />
                </Box>

                {/* 오늘 하루 트래픽 */}
                <Card sx={{ marginBottom: 4 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <TrendingUpIcon sx={{ mr: 1, color: '#1976d2' }} />
                            <Typography variant="h6" fontWeight="bold">
                                오늘 하루 이용자 트래픽
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', maxWidth: 750, minWidth: 400, height: 320, margin: '0 auto' }}>
                            <ResponsiveContainer width="100%" height={320}>
                                <PieChart>
                                    <Pie
                                        data={trafficData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={(props) => `${props.name} (${typeof props.percent === 'number' ? (props.percent * 100).toFixed(1) : '0.0'}%)`}
                                        outerRadius={80}
                                        dataKey="value"
                                    >
                                        {trafficData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </Box>
                        {/* <Grid >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
                                    {trafficData.map((item: { name: string; value: number; color: string }, index: number) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Box sx={{ width: 16, height: 16, borderRadius: '4px', bgcolor: item.color }} />
                                                <Typography variant="body1">{item.name}</Typography>
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold">
                                                {item.value.toLocaleString()}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <Box sx={{ mt: 2, pt: 2, borderTop: '2px solid #e0e0e0' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography variant="body1" fontWeight="bold" color="text.secondary">
                                                전체 방문자
                                            </Typography>
                                            <Typography variant="h5" fontWeight="bold" color="primary">
                                                {trafficData.reduce((sum: number, item: { name: string; value: number; color: string }) => sum + item.value, 0).toLocaleString()}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid> */}
                    </CardContent>
                </Card>

                {/* 인기 게시글 */}
                <Card sx={{ mb: 4 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <TrendingUpIcon sx={{ mr: 1, color: '#ed6c02' }} />
                            <Typography variant="h6" fontWeight="bold">
                                인기 게시글 TOP 5
                            </Typography>
                        </Box>
                        <TableContainer component={Paper} variant="outlined">
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ bgcolor: '#fafafa' }}>
                                        <TableCell align="center" width="80px">순위</TableCell>
                                        <TableCell>제목</TableCell>
                                        <TableCell align="center" width="120px">조회수</TableCell>
                                        <TableCell align="center" width="120px">댓글</TableCell>
                                        <TableCell align="center" width="140px">작성일</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {popularPosts.map((post: Post, idx: number) => (
                                        <TableRow
                                            key={post.id}
                                            sx={{
                                                '&:hover': { bgcolor: '#f5f5f5' },
                                                transition: 'background-color 0.2s'
                                            }}
                                        >
                                            <TableCell align="center">
                                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    {getRankIcon(idx)}
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="body2" fontWeight="500">
                                                    {post.title}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Chip
                                                    icon={<VisibilityIcon />}
                                                    label={post.views.toLocaleString()}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Chip
                                                    icon={<CommentIcon />}
                                                    label={post.comments}
                                                    size="small"
                                                    variant="outlined"
                                                    color="primary"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography variant="body2" color="text.secondary">
                                                    {post.date}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>

                {/* 최근 게시글 */}
                <Card>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <ScheduleIcon sx={{ mr: 1, color: '#1976d2' }} />
                            <Typography variant="h6" fontWeight="bold">
                                최근 게시글
                            </Typography>
                        </Box>
                        <TableContainer component={Paper} variant="outlined">
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ bgcolor: '#fafafa' }}>
                                        <TableCell>제목</TableCell>
                                        <TableCell align="center" width="120px">조회수</TableCell>
                                        <TableCell align="center" width="120px">댓글</TableCell>
                                        <TableCell align="center" width="140px">작성일</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {recentPosts.map((post: Post) => (
                                        <TableRow
                                            key={post.id}
                                            sx={{
                                                '&:hover': { bgcolor: '#f5f5f5' },
                                                transition: 'background-color 0.2s'
                                            }}
                                        >
                                            <TableCell>
                                                <Typography variant="body2" fontWeight="500">
                                                    {post.title}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Chip
                                                    icon={<VisibilityIcon />}
                                                    label={post.views.toLocaleString()}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Chip
                                                    icon={<CommentIcon />}
                                                    label={post.comments}
                                                    size="small"
                                                    variant="outlined"
                                                    color="primary"
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Typography variant="body2" color="text.secondary">
                                                    {post.date}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Container>
        </Box >
    );
};

export default Dashboard;