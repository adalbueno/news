<template>
    <div class="news-list">
        <div class="settings" v-if="this.config.newsList.settings.visible">
            <button class="btn" @click="setListType('items')" :class="{active: type == 'items'}">
                <i class="fas fa-bars" ></i>
                List
            </button>
            <button class="btn" @click="setListType('cards')" :class="{active: type == 'cards'}">
                <i class="fas fa-th-large"></i>
                Grid
            </button>
        </div>
        <ul :class="cssClasses.itemsList">
            <li v-for="(item, index) in list"
                :key="index"
                :class="[cssClasses.itemsListItem, {'read': item.read}]"
                @click="goToLink(item)">
                <app-image :class="cssClasses.itemsListItemImage" :src="item.urlToImage" />
                <div :class="cssClasses.itemsListItemDetails">
                    <h2 :class="cssClasses.itemsListItemTitle">{{ item.title }}</h2>
                    <p :class="cssClasses.itemsListItemDescription">{{ item.description }}</p>
                    <p :class="cssClasses.itemsListItemSource">{{ item.source.name }}</p>
                </div>
            </li>
        </ul>
        <app-modal :onOk="onModalOk" ref="modal" title="Link externo" cancel="Cancelar">
            <template v-if="selectedNews">
                <p>O link para a notícia "<strong>{{ selectedNews.title }}</strong>" é para um site externo ({{ selectedNews.source.name }}) e todo seu conteúdo é de responsabilidade de nosso parceiro.</p>
            </template>
        </app-modal>
    </div>
</template>

<script>
import config from '../../../app.config.js';
import Vue from 'vue';

export default {
    props: {
        list: Array
    },
    data() {
        return {
            config: config,
            type: config.newsList.type,
            selectedNews: null,
            modalShownOnce: false
        }
    },
    methods: {
        goToLink(news) {
            this.selectedNews = news;
            this.markAsRead(news);

            if (this.modalShownOnce) {
                this.onModalOk();
                return;
            }

            this.$refs.modal.show();
        },
        markAsRead(news) {
            Vue.set(news, 'read', true);
        },
        setListType(type) {
            this.type = type;
        },
        onModalOk() {
            window.open(this.selectedNews.url, '_blank');
            this.modalShownOnce = true;
            this.selectedNews = null;
        }
    },
    computed: {
        cssClasses() {
            return {
                itemsList: `${this.type}-list`,
                itemsListItem: `${this.type}-list__item`,
                itemsListItemImage: `${this.type}-list__item__image`,
                itemsListItemDetails: `${this.type}-list__item__details`,
                itemsListItemTitle: `${this.type}-list__item__title`,
                itemsListItemDescription: `${this.type}-list__item__description`,
                itemsListItemSource: `${this.type}-list__item__source`
            }
        }
    }
}
</script>
