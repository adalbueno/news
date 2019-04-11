<template>
    <div class="news">
        <div class="panel">
            <app-news-list :list="list" />
        </div>
    </div>
</template>

<script>
import config from '../../app.config.js';
import NewsService from '../services/newsService';
var newsService = new NewsService();

export default {
    data: () => ({
        list: [],
        loading: false,
        config: config
    }),
    methods: {
        getNews() {
            this.loading = true;

            newsService.getEverything(this.config.news)
                .then(this.populateNewsList)
                .finally(() => this.loading = false)
        },
        populateNewsList(data) {
            this.list = data;
        }
    },
    mounted() {
        this.getNews();
    }
}
</script>
