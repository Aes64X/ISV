#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#
include $(TOPDIR)/rules.mk

BOARD:=rockchip
BOARDNAME:=Rockchip
FEATURES:=ext4 audio usb usbgadget display gpio fpu rootfs-part boot-part squashfs
SUBTARGETS:=armv8

KERNEL_PATCHVER=5.4

define Target/Description
	Build firmware image for Rockchip SoC devices.
endef

include $(INCLUDE_DIR)/target.mk

DEFAULT_PACKAGES += uboot-envtools partx-utils e4crypt mkf2fs kmod-gpio-button-hotplug luci-app-dnsfilter nano ethtool kmod-crypto-cmac kmod-crypto-ghash kmod-crypto-md5 kmod-crypto-sha256 kmod-crypto-sha512 \
		    autocore-arm fdisk e2fsprogs ethtool haveged htop lm-sensors luci-app-nps luci-app-oaf luci-app-ttyd kmod-fs-f2fs f2fs-tools kmod-crypto-md4 kmod-crypto-seqiv luci-app-cpufreq \
		    luci-app-zerotier luci-app-ssr-plus kmod-crypto-ccm kmod-crypto-ctr kmod-crypto-des kmod-crypto-gcm kmod-crypto-gf128 kmod-crypto-hmac kmod-crypto-rng

KERNELNAME:=Image dtbs

$(eval $(call BuildTarget))
