<template>
  <v-navigation-drawer app width="280" class="elevation-1"
    v-model="$store.state.navigation.drawer"
    :clipped="$vuetify.breakpoint.lgAndUp">

    <div :class="$style.option" class="text--secondary">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" @click="foldAll(true)"><v-icon>add_circle_outline</v-icon></v-btn>
        </template>
        <span>全部折叠</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" @click="foldAll(false)"><v-icon>remove_circle_outline</v-icon></v-btn>
        </template>
        <span>全部打开</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" @click="changeTheme">
            <v-icon>{{ theme === 'light' ? 'brightness_4' : 'brightness_6' }}</v-icon>
          </v-btn>
        </template>
        <span>切换 {{ theme === 'light' ? 'Dark' : 'Light' }} 主题</span>
      </v-tooltip>
    </div>

    <div :class="$style.menu">
      <div :class="$style.group" v-for="(menu, key) in menus" :key="key">
        <div :class="$style.category" v-if="menu.label">{{menu.label}}</div>
        <div v-for="(category, ckey) in menu.categories" :key="ckey">
          <div :class="[$style.parent, { [$style.active]: category.path && category.active, [$style.open]: category.open }]" 
            class="text--secondary"
            v-ripple
            @click="onParent(category)">
            <v-icon>{{category.icon}}</v-icon>
            <span>{{category.text}}</span>
            <v-icon :class="$style.arrow" v-if="category.child">keyboard_arrow_right</v-icon>
          </div>
          <v-expand-transition>
            <ul :class="$style.child" v-show="category.child && category.open">
              <li v-ripple v-for="(child, chkey) in category.child" :key="chkey"
                :class="{ [$style.active]: child.active }"
                class="text--secondary"
                @click="onChild(child)">
                {{child.text}}
              </li>
            </ul>
          </v-expand-transition>
        </div>
      </div>
    </div>

  </v-navigation-drawer>
</template>


<script>
import { settings } from '@/common/config'

export default {
  name: 'TheMenu',

  data: () => ({
    theme: localStorage.theme || settings.theme,
  }),

  methods: {
    onParent(data) {
      if (data.path) {
        data.active = true;
        this.$router.push(data.path).catch(()=>{});
      } else {
        data.open = !data.open;
      }
      this.$forceUpdate();
    },

    onChild(data) {
      this.$router.push(data.path).catch(()=>{});
    },

    foldAll(type) {
      this.menus.map(m => m.categories.map(cate => cate.path || (cate.open = !type)));
      this.$forceUpdate();
    },

    changeTheme() {
      let isDark = null;
      if (this.theme === 'light') {
        this.theme = 'dark';
        isDark = true;
      } else {
        this.theme = 'light';
        isDark = false;
      }
      this.$vuetify.theme.dark = isDark;
      localStorage.theme = this.theme;
    },
  },

  computed: {
    drawer() {
      return this.$store.state.navigation.drawer
    },
    menus() {
      return this.$store.state.navigation.menus;
    }
  }
}
</script>

<style lang="postcss" module>
:root {
  --menu-row: {
    display: flex;
    min-height: 48px;
    font-size: 14px;
    padding: 0 16px;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  --menu-row-hover: {
    opacity: 0.04;
  }

  --menu-row-before {
    content: "";
    position: absolute;
    background-color: currentColor;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }
}

.option {
  padding: 0 10px;
  height: 56px;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
  position: relative;
  display: flex;
  align-items: center;
}

.menu {
  background: var(--v-lighten5)!important;
  & .group {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, .05);
    padding: 10px 0;
  }

  & .category {
    font-size: 13px;
    padding: 16px 16px 4px;
  }

  & .parent {
    @apply --menu-row;

    &:hover::before {
      @apply --menu-row-hover;
    }

    &::before {
      @apply --menu-row-before;
    }

    &.active {
      background-color: var(--v-primary-lighten1)!important;
    }

    &.open {
      & .arrow {
        transform: rotate(90deg);
      }
    }

    & i {
      margin-right: 32px;
    }

    & .arrow {
      margin-left: auto;
      margin-right: 0;
    }
  }

  & .child {
    padding: 0;
    & li {
      @apply --menu-row;
      padding-left: 72px;

      &:hover::before {
        @apply --menu-row-hover;
      }

      &::before {
        @apply --menu-row-before;
      }

      &.active {
        background: var(--v-primary-lighten1);
      }
    }
  }
}
</style>