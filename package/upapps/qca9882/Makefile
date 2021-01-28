include $(TOPDIR)/rules.mk
include $(INCLUDE_DIR)/version.mk

PKG_NAME:=qca9882
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
endef

define Build/Compile
endef

#ALLWIFIBOARDS:=<devicename>
# Please send a mail with your device-specific board files upstream.
# You can find instructions and examples on the linux-wireless wiki:
# <https://wireless.wiki.kernel.org/en/users/drivers/ath10k/boardfiles>
ALLWIFIBOARDS:=RG-MTFi-M520
ALLWIFIPACKAGES:=$(foreach BOARD,$(ALLWIFIBOARDS),qca9882-$(BOARD))

define Package/qca9882-default
  SUBMENU:=ruijie_wifi Boarddata
  SECTION:=firmware
  CATEGORY:=Firmware
  DEPENDS:=@TARGET_ipq806x +ath10k-firmware-qca988x
  TITLE:=Custom Board
endef

define generate-qca9882-package
  define Package/qca9882-$(1)
    $(call Package/qca9882-default)
    TITLE:=Board for $(3)
    CONFLICTS:=$(PREV_BOARD)
  endef

  define Package/qca9882-$(1)/description
This device custom package board-2.bin overwrites the board-2.bin
file which is supplied by the ruijie_wifi package.

This is package is only necessary for the $(3).
Don't install it for any other device!
  endef

  define Package/qca9882-$(1)/install-overlay
	$(INSTALL_DIR) $$(1)/lib/firmware/ath10k/QCA988X/hw2.0
	$(INSTALL_DATA) ./src/board-ruijie.bin $$(1)/lib/firmware/ath10k/QCA988X/hw2.0/board.bin
	###$(INSTALL_DATA) ./firmware-ruijie.bin $$(1)/lib/firmware/ath10k/QCA988X/hw2.0/firmware-5.bin
  endef

  PREV_BOARD+=qca9882-$(1)
endef

$(eval $(call generate-qca9882-package,RG-MTFi-M520,board-ruijie.bin,RG-MTFi-M520))

$(foreach PACKAGE,$(ALLWIFIPACKAGES),$(eval $(call BuildPackage,$(PACKAGE))))
