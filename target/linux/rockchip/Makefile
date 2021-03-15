#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#
include $(TOPDIR)/rules.mk

BOARD:=rockchip
BOARDNAME:=Rockchip
FEATURES:=ext4 audio usb usbgadget display gpio fpu pci pcie rootfs-part boot-part squashfs
SUBTARGETS:=armv8

KERNEL_PATCHVER=5.4

define Target/Description
	Build firmware image for Rockchip SoC devices.
endef

include $(INCLUDE_DIR)/target.mk

DEFAULT_PACKAGES += uboot-envtools partx-utils exfat-mkfs e2fsprogs mkf2fs nano kmod-gpio-button-hotplug exfat-fsck luci-app-cifsd \
		    automount autocore-arm fdisk kmod-fs-f2fs kmod-fs-exfat luci-app-dnsfilter f2fs-tools e4crypt ethtool haveged htop lm-sensors \
		    luci-app-qbittorrent luci-app-ttyd luci-app-autotimeset luci-app-ssr-plus luci-app-nps luci-app-zerotier

KERNELNAME:=Image dtbs

$(eval $(call BuildTarget))
